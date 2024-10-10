const mongoose = require('mongoose');

const bookingTemplate = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Simple email validation
    },
    phone: {
        type: String, // Change to String to handle formatting
        required: true
    },
    numberofguests: {
        type: Number,
        required: true,
        min: 1 // Ensure at least one guest
    },
    bookingdate: {
        type: Date,
        required: true
    },
    bookingtime: {
        type: String, // You may consider Date or String depending on format
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', bookingTemplate);
