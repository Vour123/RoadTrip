import { csrfFetch } from './csrf';

const ADD_BOOKINGS = 'bookings/addBooking';

const addBooking = (booking) => ({
    type: ADD_BOOKINGS,
    booking
})

export const postBooking = (bookingInfo) => async(dispatch) => {
    const {
        userId,
        carId,
        startDate,
        endDate
    } = bookingInfo
    const res = await csrfFetch('/api/bookings', {
        method: "POST",
        body: JSON.stringify({
            userId, 
            carId, 
            startDate, 
            endDate
        })
    })
    const bookingData = await res.json();
    dispatch(addBooking(bookingData));
    return bookingData;
}

const bookingReducer = (state = {}, action) => {
    let newState = {};
    switch(action.type) {
        case ADD_BOOKINGS:
            newState = {...state};
            newState[action.booking.id] = action.booking; // in the object of newState at the key of the booking id, the value is the payload passed into the action reducer 
            return newState;
        default:
            return state;
    }
}