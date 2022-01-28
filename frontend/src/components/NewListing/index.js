import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useHistory, Redirect } from 'react-router-dom';
import { newListing } from '../../store/listings';
import './NewListing.css'

const NewListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const { id } = sessionUser;
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            userId: +id,
            city,
            state,
            name,
            price,
            imageUrl
        }
        dispatch(newListing(newCar));
        history.push('/listings')
    }

    if (!sessionUser) return <Redirect to = '/' />;

    return (
        <div className='container'>
            <h1 className='title'>
                List your car down below!
            </h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input 
                    className='input-image' 
                    placeholder='Image Url'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    />
                    <input 
                    className='input-name' 
                    placeholder='Name of Car'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    <input 
                    className='input-price' 
                    placeholder='Price/day'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                    <input 
                    className='input-city' 
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    />
                    <input 
                    className='input-state' 
                    placeholder='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    />
                    <button className='new-listing-button' type='submit'> 
                        Submit Listing
                    </button>
                </form>
        </div>
    );

}

export default NewListing;