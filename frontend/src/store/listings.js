import { csrfFetch } from './csrf';

const GET_USER_LISTINGS = 'listing/getUserListings';
const DELETE_LISTINGS = 'lisitng/deleteListing';
const NEW_LISTING = 'listing/postListing';
const UPDATE_LISTING = 'listing/updateListing';

const getUserListings = (listings) => ({
    type: GET_USER_LISTINGS,
    listings,
});

const deleteListing = (listing) => ({
    type: DELETE_LISTINGS,
    listing
})

const updateListing = (listing) => ({
    type: UPDATE_LISTING,
    listing
})

const postListing = (listing) => ({
    type: NEW_LISTING,
    listing
})

export const getListings = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/listings/${id}`);
    const listings = await res.json();
    dispatch(getUserListings(listings));
    return listings;
}

export const updateUserListing = (info, id) => async(dispatch) => {
    const res = await csrfFetch(`/api/listings/${id}`, {
        method: "PUT",
        body: JSON.stringify(info)
    })
    const data = await res.json()
    dispatch(updateListing(data));
    return data;
}

export const deleteOwnerListing = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/listings/${id}`, {
        method: "DELETE"
    })
    const listing = await res.json();
    if(res.ok) {
        dispatch(deleteListing(listing));
    }
}

export const newListing = (listingInfo) => async(dispatch) => {
    const res = await csrfFetch('/api/listings', {
        method: "POST",
        body: JSON.stringify(listingInfo)
    })
    const listingData = await res.json();
    dispatch(postListing(listingData));
    return listingData;
}


const initialState = {
    current:{},
    all:{}
}

const listingReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case GET_USER_LISTINGS:
            newState = {...state};
            action.listings.forEach((listing) => {
                newState.all[listing.id] = listing;
            })
            return newState;
        case DELETE_LISTINGS:
            newState = {...state};
            delete newState.all[action.listing.id];
            return newState;
        case NEW_LISTING:
            newState={...state};
            newState[action.listing.id] = action.listing
            return newState
        case UPDATE_LISTING:
            console.log('this is the action for u listings', action);
            newState = {...state}
            newState.all[action.listing.id] = action.listing;
            newState.current[action.listing.id] = action.listing;
            return newState;
        default:
            return state;
    }
}

export default listingReducer;

