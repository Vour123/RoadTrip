import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { postBooking } from '../../store/bookings';
import { DateRange } from 'react-date-range';


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const BookingBox = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return(
        <div className="booking-box">
            <form className="booking-form">
                
                <div className='date-selector'>
                    <DateRange 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#333333"]}
                    onChange={handleSelect}
                    />
                </div>
            </form>
        </div>
    );
}

export default BookingBox;