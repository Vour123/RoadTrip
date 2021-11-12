import NewListing from '../components/NewListing';
import { csrfFetch } from './csrf';

const GET_CARS = 'car/getCars';
const GET_ONE_CAR = 'car/getCar'
const DELETE_LISTINGS = 'lisitng/deleteListing';
const NEW_LISTING = 'listing/postListing';


const getCars = (cars) => ({
    type: GET_CARS,
    cars,
})

const getOneCar = (car) => ({
    type: GET_ONE_CAR,
    car,
})

export const getAllCars = () => async(dispatch) => {
    const res = await csrfFetch ('/api/cars');
    const data = await res.json();
    if(res.ok) {
        dispatch(getCars(data.cars));
        return data.cars;
    }
}

export const getCar = (id) => async(dispatch) => {
    const res = await csrfFetch (`/api/cars/${id}`);
    const data = await res.json();
    if(res.ok) {
        dispatch(getOneCar(data.singleCar));
        return data.singleCar;
    }
}

const carReducer = (state = {all: {},current: {}}, action) => {
    let newState = {};
    switch(action.type) {
        case GET_CARS:
            newState = {...state};
            action.cars.forEach((car) => {
                // newState[car.id] = car ;
                newState.all[car.id] = car
            })
            return newState;
        case GET_ONE_CAR:
            // newState = {...state, [action.car.id]:action.car}
            newState = {...state};
            newState.current = action.car
            return newState;
        case DELETE_LISTINGS:
            newState = {...state}
            delete newState.all[action.listing.id]
            return newState;
        case NEW_LISTING:
            newState = {...state};
            newState.all[action.listing.id] = action.listing
            return newState;
        default:
            return state;
    }
}

export default carReducer;