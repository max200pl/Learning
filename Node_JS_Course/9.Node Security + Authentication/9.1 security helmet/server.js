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
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
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

// Save the session to the cookie
passport.serializeUser((
    user, // take the user profile from google
    done
) => {

    done(null, user.id); // first parameter is error and second is the user id that we want to save
});

// Read the session from the cookie
passport.deserializeUser((id, done) => {
    // example of how to get the user from the database
    // User.findById(id).then((user) => {
    //     done(null, user);
    // });
    done(null, id); // first parameter is error and second is the user id that we want to save
})

const app = express();
app.use(helmet());

app.use(cookieSession({
    name: 'session', // name of the cookie
    maxAge: 24 * 60 * 60 * 1000, // time live in milliseconds
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2] // key to encrypt
}))

app.use(passport.initialize()); // initialize passport session
app.use(passport.session()); // authenticate the session that's being sent to our server

function checkLoggedIn(req, res, next) {
    console.log("Current user", req.user);
    const isLoggedIn = req.IsAuthenticated() && req.user;

    if (!isLoggedIn) {
        res.status(401).send('Not authenticated');
    }
    next();
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
        session: true, // save the session  and serialize it to the cookie
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