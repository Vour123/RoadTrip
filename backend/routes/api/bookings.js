const express = require('express');
const { validationResult, check } = require('express-validator');
const asyncHandler = require("express-async-handler");

const router = express.Router();
const db = require('../../db/models');

const { Car } = db;

const validateListing = [];

router.get('/', asyncHandler(async(req, res) => {
    const listings = await Car.findAll();
    res.json({listings});
}));

module.exports = router;