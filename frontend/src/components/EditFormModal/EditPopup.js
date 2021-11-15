import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { DateRange } from 'react-date-range';
import { updateBookingDates } from '../../store/bookings';

import './EditFormModal.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const EditPopup = ({setShowModal}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const booking = useSelector(state => Object.values(state.booking.all));
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingInfo = {
            startDate,
            endDate
        };
        dispatch(updateBookingDates(bookingInfo ,booking[0].id));
        setShowModal(false);
    };  

    return (
        <div className='edit-modal'>
            <DateRange 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#333333"]}
            onChange={handleSelect}
            />
            <button className='confirm-button' onClick={handleSubmit}>
                Confirm changes
            </button>
        </div>
    );
}

export default EditPopup;