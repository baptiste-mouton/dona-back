const express = require('express');

const router = express.Router()
const associationModel = require('../models/association');

router.get('/associations', async (req, res) => {
    try {
        const data = await associationModel.find();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/associations/:id', async (req, res) => {
    try {
        const data = await associationModel.findOne({id: req.params.id});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;