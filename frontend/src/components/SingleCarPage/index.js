import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import  BookingBox  from "../BookingBox"; 
import { getCar } from "../../store/cars";
import Cars from "../CarCards";

import './SingleCar.css';

const OneCar = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    

    useEffect(() => {
        dispatch(getCar(id)).then(() => setIsLoaded(true));
    },[dispatch]);
    
    const oneCar = useSelector((state) => state.car.current);
    console.log('onecar', oneCar.name);
    return isLoaded && ( 
        <div className='single-car-page'>
            { oneCar ? 
            (<div>
                <img class="single-car-image" src={oneCar.Images[0].url}></img>
                <span className="single-car-name">{oneCar.name}</span>
                <span className="single-car-price">{oneCar.price}</span>
                <span className="single-car-city">{oneCar.city}</span>
                <span className="single-car-texas">{oneCar.state}</span>
            </div>)
            :null}
            <div className='book-container'>
                <h3 className='book-car-now'>Book this {oneCar.name} Now!</h3>
                <BookingBox />
            </div>
        </div>
    );
}

export default OneCar;