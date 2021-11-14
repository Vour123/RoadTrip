import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { updateUserListing } from '../../store/listings';

const OwnerEdit = ({setShowModal}) => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const { id } = useParams();
    
    const handleEdit = (e) => {
        e.preventDefault();
        const newCar = {
            city,
            state,
            name,
            price,
            imageUrl
        }
        dispatch(updateUserListing(newCar, id));
        setShowModal(false);
    }

    return(
        <div className='owner-edit'>
            <div className='create-form-box'>
                <form className='form' onSubmit={handleEdit}>
                    <input 
                    className='input-image' 
                    placeholder='Image Url'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <input 
                    className='input-name' 
                    placeholder='Name of Car'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                    className='input-price' 
                    placeholder='Price/day'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    <input 
                    className='input-city' 
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <input 
                    className='input-state' 
                    placeholder='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    />
                    <button onClick={handleEdit} type='submit'>
                        Submit changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OwnerEdit;

