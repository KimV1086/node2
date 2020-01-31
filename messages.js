const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = './messages';

router.post('/', (req, res) => {
    const date = new Date().toISOString();
    let fileName = './messages/' + date + '.txt';
    const message = {
        message: req.body.message,
        time: date
    };
    fs.writeFileSync(fileName, JSON.stringify(message));
    res.send({message: req.body.message, time: date});
});

module.exports = router;