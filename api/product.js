const express = require('express');
const router = express.Router();

/*
    Get product list
    @return product list | empty
*/

router.get('/', async (req, res) => {
    try {
        res.json({
            // If successful, then it will show {"status":200,"message":"Successfully get data"}
            status: 200,
            message: 'Successfully get data'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).sendStatus("Server error 500");
    }
});

module.exports = router;
