const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    domain: {
        required: true,
        type: String
    },
    raised_amount: {
        required: true,
        type: Number
    },
    recolted_amount: {
        required: true,
        type: Number
    }
});

const associationSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email_address: {
        required: true,
        type: String
    },
    account_address: {
        required: true,
        type: String
    },
    campaigns: [campaignSchema]
});

module.exports = mongoose.model('Association', associationSchema);