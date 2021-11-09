const express = require('express');
const { validationResult, check } = require('express-validator');
const asyncHandler = require("express-async-handler");

const router = express.Router();
const db = require('../../db/models');

const { Car, User, Image } = db;

router.get('/', asyncHandler(async(req, res) => {
    const cars = await Car.findAll({
        include:[{model:Image},{model:User}]
    });
    res.json({cars});
}));

module.exports = router;