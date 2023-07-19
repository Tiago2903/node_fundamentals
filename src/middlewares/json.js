export async function json(req, res) {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }
    try {
        req.fullBody = JSON.parse(Buffer.concat(buffers).toString());
    } catch {
        req.fullBody = null
    }
    res.setHeader('Content-type', 'application/json');
}
