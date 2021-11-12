import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const OwnerPopUp = ({setShowModal}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const handleClick = () => {
        

        history.push('/listings')
        setShowModal(false)
    }

    return(
        <div className='owner-confirmation'>
            <p>Are you sure you want to delete this listing?</p>
            <button onClick={handleClick}>Delete this listing</button>
        </div>
    )
}

export default OwnerPopUp;