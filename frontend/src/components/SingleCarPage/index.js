import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import  BookingBox  from "../BookingBox"; 
import { getCar } from "../../store/cars";
import OwnerListingModal from "../OwnerListingModal";
import Cars from "../CarCards";
import './SingleCar.css';

const OneCar = () => {
    const oneCar = useSelector((state) => state.car.current);
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log('oneCar state', oneCar);
    

    useEffect(() => {
        dispatch(getCar(id)).then(() => setIsLoaded(true));
    },[dispatch]);
    

    return isLoaded && ( 
        <div className='single-car-page'>
            { oneCar ? 
            (<div>
                <img class="single-car-image" src={oneCar?.Images[0].url}></img>
                <span className="single-car-name">{oneCar?.name}</span>
                <span className="single-car-price">{oneCar?.price}</span>
                <span className="single-car-city">{oneCar?.city}</span>
                <span className="single-car-texas">{oneCar?.state}</span>
            </div>)
            :null}
            {sessionUser.id !== oneCar?.userId ? 
                <div className='book-container'>
                    <h3 className='book-car-now'>Book this {oneCar.name} Now!</h3>
                    <BookingBox />
                </div>
                :<OwnerListingModal/>}
        </div>
    );
}

export default OneCar;