const mongoose = require('mongoose');

const associationSchema = require('./association');

const campaignSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    association: associationSchema,
    aimed_amount: {
        required: true,
        type: Number
    },
    recolted_amount: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);