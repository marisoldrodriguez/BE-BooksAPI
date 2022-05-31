const router = require('express').Router();
const db = require('../models/books');

// INDEX
router.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
        
    })
})

module.exports = router;