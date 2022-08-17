const bodyParser = require("body-parser");
const express = require('express');

const router = express.Router()
const userModel = require('../models/user');

const ObjectId = require('mongoose').Types.ObjectId

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

router.post('/user', async (req,res) => {
    const user = new userModel({
        name: req.body.name,
        email_address: req.body.email_address,
        account_address: req.body.account_address,
        isAssociation: false
    });

    try {
        let savedUser = await user.save();
        res.status(200).json(savedUser);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/association', async (req,res) => {
    const association = new userModel({
        name: req.body.name,
        email_address: req.body.email_address,
        account_address: req.body.account_address,
        isAssociation: true,
        domain: req.body.domain,
        description: req.body.description
    });

    try {
        let savedAssociation = await association.save();
        res.status(200).json(savedAssociation);
    } catch(error) {
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

router.put('/associations/:id/', async (req, res) => {
    const assosId = req.params.id;
    const mongooseId = ObjectId(assosId)
    try {
        userModel.updateOne({_id: mongooseId},{ $push: { campaigns : [req.body] } })
            .then(async() =>{

                const user = await userModel.findOne({_id: req.params.id})
                const campaign = user.campaigns.pop()
                let campId = '' 
                if (campaign){
                    campId = campaign._id
                }

                res.status(200).json({id:campId})
            }
            )
            
         
    } catch(e) {
        console.log(e)
        res.status(400).send({e})
    }

});

module.exports = router;