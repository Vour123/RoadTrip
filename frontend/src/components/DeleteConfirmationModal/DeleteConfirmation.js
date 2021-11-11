import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getUserBooking } from "../../store/bookings";
import { unreserve } from "../../store/bookings";

const DeletePopUp = () => {
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
    }

    return (
        <div className='delete-modal'>
            <p className='delete-modal-text'> Are you sure you want to delete this reservation</p>
            <button className='delete-button' onClick={() => handleDelete(booking[0].id)}>
                Delete
            </button>
        </div>

    );

}

export default DeletePopUp;