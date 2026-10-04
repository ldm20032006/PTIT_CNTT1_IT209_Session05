const express = require('express');
const app = express();

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // HOTFIX: Da loai bo in mat khau nguoi dung, chi log username an toan
    console.log([AUTH] User login attempt:  - Status: sanitized);
    res.json({ status: 'ok', user: username });
});

app.listen(3000, () => console.log('App running v1.0.1'));
