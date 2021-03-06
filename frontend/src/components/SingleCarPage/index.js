import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import  BookingBox  from "../BookingBox"; 
import { getCar } from "../../store/cars";
import OwnerListingModal from "../OwnerListingModal";
import OwnerEditModal from "../OwnerEditModal";
import Cars from "../CarCards";
import './SingleCar.css';

const OneCar = () => {
    const oneCar = useSelector((state) => state.car.current);
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCar(id)).then(() => setIsLoaded(true));
    },[dispatch]);
    

    return isLoaded && ( 
        <div className='single-car-page'>
            <div className='car-image-container'>
                <img className="single-car-image" src={oneCar?.Images[0].url}></img>
            </div>
            <div className="information-box">
                { oneCar ? 
                (<div className='all-car-details'>
                    <div className='car-details-single'>
                        <span className="single-car-name">{oneCar?.name}</span>
                        <div className="location"> 
                            <span className="single-car-city">{oneCar?.city}</span>
                            <span className="single-car-texas">{oneCar?.state}</span>
                        </div>
                    </div>
                </div>)
                :null}
                {sessionUser?.id !== oneCar?.userId ? 
                    <div className='book-container'>
                        <span className="single-car-price">${oneCar?.price}/day</span>
                        <BookingBox />
                    </div>
                    :<>
                    <div className="owner-buttons-container">
                        <OwnerEditModal/>
                        <OwnerListingModal/>
                    </div>
                    </>}
            </div>
        </div>
    );
}

export default OneCar;