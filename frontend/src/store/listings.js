import { csrfFetch } from './csrf';

const GET_USER_LISTINGS = 'listing/getUserListings';
const DELETE_LISTINGS = 'lisitng/deleteListing';

const getUserListings = (listings) => ({
    type: GET_USER_LISTINGS,
    listings,
});

const deleteListing = (listing) => ({
    type: DELETE_LISTINGS,
    listing
}) 

export const getListings = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/listings/${id}`);
    const listings = await res.json();
    dispatch(getUserListings(listings));
    return listings;
}


const initialState = {
    current:{},
    all:{}
}

const listingReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case GET_USER_LISTINGS:
            console.log('state', state);
            newState = {...state};
            action.listings.forEach((listing) => {
                newState.all[listing.id] = listing;
            })
            return newState;
        default:
            return state;
    }
}

export default listingReducer;

