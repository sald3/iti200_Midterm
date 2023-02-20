const http = require("http");

const PORT = process.env.PORT || 3000;

let server = http.createServer((request, response) => {

    if (request.url == "/api/users") {
        let users =  [
            {
                "name": "user_1"
            },
            {
                "name": "user_2"
            },
            {
                "name": "user_3"
            }
        ]
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.write(JSON.stringify(users));
    } else {
        response.write("Error");
    }

    response.end();
});

server.listen(PORT);