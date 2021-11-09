//placeholder
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/cars';
import CarCardDetails from '../CarCardDetails/index';

const Cars = () => {
    const cars = useSelector((state) => Object.values(state.car));
    const dispatch = useDispatch();
    console.log('cars', cars);

    useEffect(() => {
        dispatch(getAllCars());
    },[dispatch]);

    return (
        <div>
            <div className='cars-cards-container'>
                {cars.length > 0 ? cars.map(({id, image, price, name}) => {
                    <div>hi</div>
                    // <CarCardDetails
                    // key={id}
                    // id={id}
                    // image={image}
                    // name={name}
                    // price={price}
                    // />
                }): null}
            </div>
        </div>
    );
};


export default Cars;