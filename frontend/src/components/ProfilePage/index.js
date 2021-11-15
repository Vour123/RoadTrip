import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { getUserBooking, unreserve } from '../../store/bookings';
import { getListings } from '../../store/listings';
import EditFormModal from '../EditFormModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
import CarCardDetails from '../CarCardDetails';

const ProfilePage = () => {
    const booking = useSelector(state => Object.values(state.booking.all));
    const sessionUser = useSelector(state => state.session.user)
    const listings = useSelector(state => Object.values(state.listings.all))
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
        
    const dispatch = useDispatch();
    const { id } = useParams();
    const userId = sessionUser.id;

     useEffect(() => {
        dispatch(getUserBooking(userId)).then(() => setIsLoaded(true));
        dispatch(getListings(id)).then(() => setIsLoaded(true));
    },[dispatch, id])

    return (
        <>
            <div className='owner-listing-container'>
                <div className='owner-car-info'>
                    <h2>Your Listings!</h2>
                    {listings?.map(({id, Images, price, name}) => 
                    { return (
                        <div>
                            <NavLink to={`/cars/${id}`}>
                                <CarCardDetails
                                key={id}
                                id={id}
                                image={Images[0].url}
                                name={name}
                                price={price}
                                />
                            </NavLink>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className='reservation-box'>
                {booking.length > 0 ? 
                <>
                    <div className='user-info'>
                        <h1 className='user-name'>{sessionUser.username}</h1>
                    </div>
                    <div className='user-booking-info-container'>
                        <p>You have a reservation for a: {booking[0].Car?.name}</p>
                        <p> starting on: {booking[0]?.startDate}</p>
                        <p>and ending on: {booking[0]?.endDate}</p> 
                    </div>
                    <DeleteConfirmationModal />
                    <EditFormModal />
                </>
                :<>
                    <div className='user-info'>
                        <h1 className='user-name'>{sessionUser.username}</h1>
                    </div>
                    <h5>You have no current reservations!</h5>
                </>}
            </div>
        </>
    )
}

export default ProfilePage;