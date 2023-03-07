// Required modules
const { Router } = require('express');
// Routes
const service1Routes = require('./service1.routes');
const service2Routes = require('./service2.routes');

// Create express router
const router = Router();

// Pove route
router.get('/prove', async (req, res) => {
    try {
        return res.status(200).json({message: 'API Gateway Run'});  
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
});

// Add routes
// router.use('/service1', service1Routes);
router.use('/', service2Routes);

// Export router
module.exports = router;