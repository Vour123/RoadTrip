const express = require('express');
const { validationResult, check } = require('express-validator');
const asyncHandler = require("express-async-handler");

const router = express.Router();
const db = require('../../db/models');

const { Booking } = db;

const validateBooking = [];

router.get('/', asyncHandler(async(req, res) => {
    const booking = await Booking.findAll();
    res.json({booking});
}));

router.post('/', asyncHandler(async(req, res) => {
    const {carId, userId, startDate, endDate} = req.body;
    const booking = await Booking.create({carId, userId, startDate, endDate});

    if (!booking) {
        const err = new Error('Booking Failed');
        err.status = 401;
        err.title = 'Booking was not able to complete';
        err.errors = ['Booking was not able to complete'];
        return next(err);
        }

    return res.json({booking});
}));

router.delete('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const bookingId  = req.params.id;
    if(bookingId) {
        const booking = await Booking.findByPk(bookingId);
        await booking.destroy();
        res.json(booking);
    } 
}));

router.put('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const bookingId = req.params.id;
    const {startDate, endDate} = req.body;
    if(bookingId) {
        const booking = await Booking.findByPk(bookingId);
        await booking.update({startDate, endDate});
        res.json(booking);
    }
}));

module.exports = router;