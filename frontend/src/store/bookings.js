import { csrfFetch } from './csrf';

const ADD_BOOKINGS = 'bookings/addBooking';
const GET_BOOKING = 'bookings/getBooking'
const DELETE_BOOKING = 'bookings/deleteBooking';
const UPDATE_BOOKING = 'bookings/updateBoooking';

const addBooking = (booking) => ({
    type: ADD_BOOKINGS,
    booking
})

const getBooking = (bookings) => ({
    type: GET_BOOKING,
    bookings,
})

const deleteBooking = (booking) => ({
    type: DELETE_BOOKING,
    booking,
})

const updateBooking = (booking) => ({
    type: UPDATE_BOOKING,
    booking,
})

export const unreserve = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/bookings/${id}`,{
        method: "DELETE"
    })
    const booking = await res.json();
    console.log(booking);
    if(res.ok) {
        dispatch(deleteBooking(booking));
        return booking;
    }
}

export const updateBookingDates = (bookingInfo, id) => async(dispatch) => {
    const {startDate, endDate} = bookingInfo;

    const res = await csrfFetch (`/api/bookings/${id}`, {
        method: "PUT",
        body: JSON.stringify({startDate, endDate})
    })
    const bookingData = await res.json();
    dispatch(updateBooking(bookingData));
    return bookingData;
}
 
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

export const getUserBooking = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/profile/${id}`);
    const userBookings = await res.json();

    if(res.ok) {
        dispatch(getBooking(userBookings))
        return userBookings;
    }
}

const bookingReducer = (state = {all: {} ,current: {}}, action) => {
    let newState = {};
    switch(action.type) {
        case ADD_BOOKINGS:
            newState = {...state};
            newState[action.booking.id] = action.booking; // in the object of newState at the key of the booking id, the value is the payload passed into the action reducer 
            return newState;
        case GET_BOOKING:
            newState = {...state};
            action.bookings.forEach((booking) => {
                newState.all[booking.id] = booking;
            })
            return newState;
        case DELETE_BOOKING:
            newState = {...state};
            delete newState.all[action.booking.id]
            return newState;
        case UPDATE_BOOKING:
            newState = {...state};
            newState[action.booking.id] = action.booking;
            return newState;
        default:
            return state;
    }
}

export default bookingReducer;