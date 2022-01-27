const express = require('express')
const router = express.Router()


router.get('/rfid-gold-scan/v1/api/', (req, res) => {
    return res.send("hello from rfid-gold-scan");   
})


module.exports = router