const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    aimed_amount: {
        required: true,
        type: Number
    },
    raised_amount: {
        type: Number
    },
    description: {
        required: true,
        type: String
    }
});

const userSchema = new mongoose.Schema({
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
    isAssociation: {
        required: true,
        type: Boolean
    },
    domain: {
        required: true,
        type: String
    },
    campaigns: [campaignSchema]
});

module.exports = mongoose.model('User', userSchema);