import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useHistory, Redirect } from 'react-router-dom';

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
            userId: id,
            city,
            state,
            name,
            price,
        }

        const carImage = {
            imageUrl
        }
    }
    if (!sessionUser) return <Redirect to = '/' />;

    

    return (
        <div>
            <h1 className='title'>
                List your car down below!
            </h1>
            <div className='create-form-box'>
                <form className='form' onSubmit={handleSubmit}>
                    <input 
                    className='input-image' 
                    placeholder='Image Url'
                    value={imageUrl}
                    />
                    <input 
                    className='input-name' 
                    placeholder='Name of Car'
                    value={name}
                    />
                    <input 
                    className='input-price' 
                    placeholder='Price/day'
                    value={price}
                    />
                    <input 
                    className='input-city' 
                    placeholder='City'
                    value={city}
                    />
                    <input 
                    className='input-state' 
                    placeholder='State'
                    value={state}
                    />
                    <button className='new-listing-button' type='submit'> 
                        Submit Listing
                    </button>
                </form>
            </div>
        </div>
    );

}

export default NewListing;