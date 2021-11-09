//placeholder
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/cars';
import CarCardDetails from '../CarCardDetails/index';

const Cars = () => {
    const cars = useSelector((state) => Object.values(state.car));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    },[dispatch]);

    return (
        <div>
            <div className='cars-cards-container'>
                {cars.length > 0 ? cars.map(({id, Images, price, name}) => 
                { return (
                    <CarCardDetails
                    key={id}
                    id={id}
                    image={Images[0].url}
                    name={name}
                    price={price}
                    />)
                }): null}
            </div>
        </div>
    );
};


export default Cars;