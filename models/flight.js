const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type:Date,   
    }
}, {
    timestamps: true
}
);

const flightSchema = new Schema({
    airport: {
        type:String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    airline: String,
    flightNo: Number,
    departs: { // add object for date
        type: Date
        // default: function() {
        //     let x = new Date();
        // return x.setFullYear(x.getFullYear());
    },
    destinations: [destinationSchema],
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);