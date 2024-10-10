const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingmodel');

// Endpoint for booking
router.post('/book', async (req, res) => {
    try {
        const newBooking = new Booking({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            numberofguests: req.body.numberofguests,
            bookingdate: req.body.bookingdate,
            bookingtime: req.body.bookingtime,
        });

        const savedBooking = await newBooking.save();
        console.log("Successfully added to database");
        res.status(201).json(savedBooking); // 201 Created
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error creating booking", error }); // 400 Bad Request
    }
});

// Endpoint to download the menu
router.get('/menu', (req, res) => {
    console.log('File download requested');
    
    res.download('./Files/menu.pdf', (err) => {
        if (err) {
            console.error("Error downloading file:", err);
            res.status(500).send("Could not download file"); // 500 Internal Server Error
        }
    });
});

module.exports = router;
