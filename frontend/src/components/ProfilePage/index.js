import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { getUserBooking, unreserve } from '../../store/bookings';
import EditFormModal from '../EditFormModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

const ProfilePage = () => {
    const booking = useSelector(state => Object.values(state.booking.all));
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();
    
    const dispatch = useDispatch();
    const { id } = useParams();

     useEffect(() => {
        dispatch(getUserBooking(id))
    },[dispatch, id])

    const handleDelete = (bookingId) => {
        dispatch(unreserve(bookingId))
        history.push(`/profile/${id}`);
    }

    return (
        <div>
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
    )
}

export default ProfilePage;