const mongoose = require('mongoose');

/** Campaign model, as stored in the mongoDB database */
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
    },
    association: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    },
});

/** User model, as stored in the mongoDB database */
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
        required: false,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    campaigns: [campaignSchema]
});

module.exports = mongoose.model('User', userSchema);