exports.handler = (req, res) => {
    const url = getUrl(req.query.message);
    res.json({ url });
}

function getUrl(message) {
    return message;
}