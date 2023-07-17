import http from 'http'

// node src/server.js
// npm start


const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users));
    }
    if (method === "POST" && url === '/users') {
        console.log('aqui post');
        users.push({
            id: 1,
            name: 'brother',
            email: "ema@il.com"
        });
    }

    return res.end('mundo criado');
});

server.listen(3333);