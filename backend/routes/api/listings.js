const express = require('express');
const { validationResult, check } = require('express-validator');
const asyncHandler = require("express-async-handler");

const router = express.Router();
const db = require('../../db/models');


const { Car, Image, User } = db;

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = req.params.id
    const cars = await Car.findAll({
        include: [{model: Image}],
        where: {
            userId
        }
    })
    return res.json(cars);
}));

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const carId = req.params.id;
    if(carId) {
        const car = await Car.findByPk(carId);
        await car.destroy();
        res.json(car);
    }
}));

router.post('/', asyncHandler(async(req,res) => {
    const {userId, city, state, name, price, imageUrl} = req.body;
    const newCar = await Car.create({userId, city, state, name, price});
    const newImage = await Image.create({url: imageUrl, carId: newCar.id})

    if (!newCar) {
        const err = new Error('Listing Failed');
        err.status = 401;
        err.title = 'The Listing was not able to complete';
        err.errors = ['The Listing was not able to complete'];
        return next(err);
        }
    return res.json(newCar);
}));

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
    const listingId = req.params.id;
    const { city, state, name, price, imageUrl } = req.body;
    if(listingId) {
        const image = await Image.findOne({where:{carId:listingId}}) 
        await image.update({url: imageUrl});
        const car = await Car.findByPk(listingId, {
            include: [{model: Image}]
        });
        await car.update({city, state, name, price});
        return res.json(car);
    }
}));


module.exports = router;