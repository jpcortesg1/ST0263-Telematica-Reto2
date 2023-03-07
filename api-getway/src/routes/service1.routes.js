// Required modules
const { Router } = require('express');
const axios = require('axios');

// Create express router
const router = Router();

// Connect with service1 from newtwork docker compose
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://service1:8001/prove');
        console.log(response.data);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
})

// Export router
module.exports = router;