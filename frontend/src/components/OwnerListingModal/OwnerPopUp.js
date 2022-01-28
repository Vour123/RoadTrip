import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deleteOwnerListing } from "../../store/listings";
import './OwnerListingModal.css'

const OwnerPopUp = ({setShowModal}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const handleDelete = () => {
        dispatch(deleteOwnerListing(id));
        setShowModal(false)
        history.push('/listings')
    }

    return(
        <div className='owner-confirmation'>
            <p>Are you sure you want to delete this listing?</p>
            <a className='delete-button' onClick={handleDelete}> Delete this listing </a>
        </div>
    )
}

export default OwnerPopUp;