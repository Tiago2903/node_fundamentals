import http from 'http'
import { json } from './middlewares/json.js'

// node src/server.js
// npm start

const users = [];

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res)

    if (method === "GET" && url === '/users') {
        return res
            .end(JSON.stringify(users));
    }
    if (method === "POST" && url === '/users') {
        const { name, email } = req.fullBody;
        users.push({
            id: 1,
            name,
            email
        });
    }

    return res.end('mundo criado');
});

server.listen(3333);