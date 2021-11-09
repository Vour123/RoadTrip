//placeholder
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/cars';

const Cars = () => {
    const cars = useSelector((state) => Object.values(state.car));
    const dispatch = useDispatch();

    console.log('cars', cars);

    useEffect(() => {
        dispatch(getAllCars());
    },[dispatch]);

    return (
        <div>
            <div className='cars-container'>

            </div>
        </div>
    );
};


export default Cars;