const express = require('express');

const router = express.Router()
const userModel = require('../models/user');

router.get('/users', async (req, res) => {
    const address = req.query.account_address;
    try {
        let data;
        if (address) data = await userModel.find({account_address: address});
        else data = await userModel.find({isAssociation: false});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/associations', async (req, res) => {
    try {
        const data = await userModel.find({isAssociation: true});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/associations/:id', async (req, res) => {
    try {
        const data = await userModel.findOne({_id: req.params.id});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;