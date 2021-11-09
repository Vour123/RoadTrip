const GET_CARS ='car/getCars';

const getCars = (cars) => ({
    type: GET_CARS,
    cars,
})

export const getAllCars = () => async(dispatch) => {
    const res = await fetch ('/api/cars');
    const data = await res.json();
    if(res.ok) {
        dispatch(getCars(data.cars));
        return data.cars;
    }
}

const carReducer = (state = {}, action) => {
    let newState = {};
    switch(action.type) {
        case GET_CARS:
            newState = {...state};
            action.cars.forEach((car) => {
                newState[car.id] = car ;
            })
            return newState;
        default:
            return state;
    }
}

export default carReducer;