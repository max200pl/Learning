const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: "Nicola Tesla",
    },
    {
        id: 1,
        name: "Sir Isaac Newton",
    },
]


server.on('request', (req, res) => {
    const items = req.url.split('/');

    console.log(items, "items");
    // /friends/2 > ['', friends', '2]

    if (items[1] === "friend") {
        // res.writeHead(200, {
        //     "Content-Type": "application/json",
        // });
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if (items.length === 3) { // extra parameter
            const friendIndex = Number(items[2]);

            res.end(
                JSON.stringify(friends[friendIndex])
            )
        } else {
            res.end(
                JSON.stringify(friends)
            );

        }
    } else if (items[1] === "messages") {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello! </li>');
        res.write('<li> How are you? </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT, () => {
    // run wen server is listening
    console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost
