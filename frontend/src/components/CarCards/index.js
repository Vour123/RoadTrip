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
            <h1 className='title-allcars'> All Cars Available</h1>
            <div className='cars-grid-container'>
                <div className='car-grid'>
                    {cars.length > 0 ? cars?.map(({id, Images, price, name}) => 
                    { let imageUrl;
                        if(Images?.length > 0) {
                            imageUrl = Images[0].url
                        } return (
                        <div key={id} className='car-card-container'>
                            <NavLink to={`/cars/${id}`}>
                                <CarCardDetails
                                key={id}
                                id={id}
                                image={imageUrl}
                                name={name}
                                price={price}
                                />
                            </NavLink>
                        </div>)
                    }): null}
                </div>
            </div>
        </div>
    );
};


export default Cars;