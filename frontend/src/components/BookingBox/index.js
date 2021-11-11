import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { postBooking } from '../../store/bookings';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const BookingBox = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();
    const history = useHistory();

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingInfo = {
            carId: id,
            userId: sessionUser.id,
            startDate,
            endDate
        };
        dispatch(postBooking(bookingInfo));

        history.push(`/profile/${id}`);
    };  

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return(
        <div className="booking-box">
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className='date-selector'>
                    <DateRange 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#333333"]}
                    onChange={handleSelect}
                    />
                    <button className='reservation-button' type="submit">
                        Confirm Reservation
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookingBox;