import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserBooking } from "../../store/bookings";
import { unreserve } from "../../store/bookings";

const DeletePopUp = ({setShowModal}) => {
    const booking = useSelector(state => Object.values(state.booking.all));
    const dispatch = useDispatch();
    const bookingId = booking[0].id
    const { id } = useParams();

     useEffect(() => {
        dispatch(getUserBooking(id))
    },[dispatch, id])

    const handleDelete = () => {
        dispatch(unreserve(bookingId))
        setShowModal(false)
    }

    return (
        <div className='delete-modal'>
            <p className='delete-modal-text'> Are you sure you want to delete this reservation</p>
            <button className='delete-button' onClick={handleDelete}>
                Delete
            </button>
        </div>

    );
}

export default DeletePopUp;