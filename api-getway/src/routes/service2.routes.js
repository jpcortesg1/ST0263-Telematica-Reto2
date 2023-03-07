// Required modules
const { Router } = require('express');
const axios = require('axios');
const {findFileMOM, findAllFilesMOM} = require('../services/MOMFindFile');
let service = 1;

// Create express router
const router = Router();

// Connect with service2 from newtwork docker compose
router.get('/prove', async (req, res) => {
    try {
        const response = await axios.get('http://service2:8002/prove');
        console.log(response.data);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

// Send message to queue request to rabbitMQ
// And responde to client with info from queue response
router.get('/', async (req, res) => {
    try {
        const messageJson = {
            method: 'GET',
            random: Math.random()
        }
        const response = await findAllFilesMOM(messageJson);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

router.get('/:namefile', async (req, res) => {
    try {
        const { namefile } = req.params;
        const messageJson = {
            method: 'GET',
            namefile,
            service: service%2===0 ? 'MOM' : 'RCP'
        }
        service++;
        const response = await findFileMOM (messageJson);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

// Export router
module.exports = router;