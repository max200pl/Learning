const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const { verify } = require('crypto');

require('dotenv').config();

const PORT = 3000;

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const AUTH_OPTIONS = {
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}

function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log("Google profile", profile);
    done(null, profile); // first parameter is error
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express();
app.use(helmet());

app.use(passport.initialize());

function checkLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).send('Not authenticated');
    }
}

app.get("/auth/google",
    passport.authenticate('google', {
        scope: ["email"],
    })
);

app.get("/auth/google/callback",
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/failure',
        session: false,
    }),
    (req, res) => {
        console.log("Google called us back");
    }
);

app.get("/auth/logout", (req, res) => { });

app.get('/secret', checkLoggedIn, (req, res) => {
    return res.send('Secret page');
});

app.get('/failure', (req, res) => {
    return res.send('Failed to authenticate');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});