const express = require('express');
const { validationResult, check } = require('express-validator');
const asyncHandler = require("express-async-handler");

const router = express.Router();
const db = require('../../db/models');

const { Car, User, Image } = db;

const carNotFoundError = () => {
    const carError = new Error('Car not Found');
    carError.status = 404;
    carError.title = "Car Not Found";
}

router.get('/', asyncHandler(async(req, res) => {
    const cars = await Car.findAll({
        include:[{model:Image},{model:User}]
    });
    res.json({cars});
}));

router.get('/:id(\\d+)', asyncHandler(async(req,res, next) => {
    const id = req.params.id;
    if(id) {
        const singleCar = await Car.findByPk(id,
            {include:[{model:Image}, {model:User}]});
        res.json({singleCar});
    } else {   
        next(carNotFoundError());
    }
})); 

module.exports = router;