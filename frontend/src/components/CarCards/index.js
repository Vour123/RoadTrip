import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCars } from '../../store/cars';
import CarCardDetails from '../CarCardDetails/index';
import './CarCard.css';

const Cars = () => {
    const cars = useSelector((state) => Object.values(state.car.all));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    },[dispatch]);

    return (
        <div>
            <div className='cars-cards-container'>
                {cars.length > 0 ? cars.map(({id, Images, price, name}) => 
                { return (
                    <NavLink to={`/cars/${id}`}>
                        <CarCardDetails
                        key={id}
                        id={id}
                        image={Images[0].url}
                        name={name}
                        price={price}
                        />
                    </NavLink>)
                }): null}
            </div>
        </div>
    );
};


export default Cars;