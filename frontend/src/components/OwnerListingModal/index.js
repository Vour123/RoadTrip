import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import OwnerPopUp from './OwnerPopUp';
import '../SingleCarPage/SingleCar.css'
import './OwnerListingModal.css'

const OwnerListingModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <a className='owner-button' onClick={() => setShowModal(true)}>Delete this listing</a>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <OwnerPopUp setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}   

export default OwnerListingModal;