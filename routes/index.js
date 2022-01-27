const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    return res.send("hello from rfid-gold-scan");   
})


module.exports = router