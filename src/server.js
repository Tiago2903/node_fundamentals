import http from 'http'
import { json } from './middlewares/json.js'
import { Database } from './middlewares/database.js'

// node src/server.js
// npm start

const database = new Database;

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res)

    if (method === "GET" && url === '/users') {
        const users = database.select('users')
        return res.end(JSON.stringify(users));
    }

    if (method === "POST" && url === '/users') {
        const { name, email } = req.fullBody;
        const user = {
            id: 1,
            name,
            email
        };

        database.insert('users', user)
    }

    return res.end('mundo criado');
});

server.listen(3333);