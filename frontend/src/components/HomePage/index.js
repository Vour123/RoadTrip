import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='homepage-container'>
                <div className='homepage-content'>
                    <h1 className='homepage-title'>Welcome To RoadTrip!</h1>
                    <h3 className='homepage-description'>
                        RoadTrip is the place to app to go to for your renting car needs!
                    </h3>
                    {sessionUser ? 
                        null:
                        <div className='button-container'>
                            <NavLink to='/signup' className='homepage-signup-button'>
                                Sign Up Now!
                            </NavLink>
                        </div>
                            }
                            <div className='button-container'>
                                <NavLink to='/listings'className='homepage-all-cars'>
                                    View All Cars!
                                </NavLink>
                            </div>
                </div>
        </div>
    );
}

export default HomePage;