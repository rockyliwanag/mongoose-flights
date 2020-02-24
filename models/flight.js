const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American Airlines',
                'Southwest Airlines',
                'United Airlines',
                'JetBlue Airlines']
    },
    flightNo: {
        type: Number},
    departs: Date,
    international: {
        type: Boolean, 
        default: false}

});

module.exports = mongoose.model('Flight', flightSchema);