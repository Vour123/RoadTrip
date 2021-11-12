const express = require('express');
const { validationResult, check } = require('express-validator');
const asyncHandler = require("express-async-handler");

const router = express.Router();
const db = require('../../db/models');

const { Car, Image, User } = db;

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = req.params.id
    const cars = await Car.findAll({
        where: {
            userId
        }
    })
    return res.json(cars);
}));


module.exports = router;