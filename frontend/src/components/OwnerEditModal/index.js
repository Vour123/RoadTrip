import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import OwnerEdit from './OwnerEdit';
import '../SingleCarPage/SingleCar.css'


const OwnerEditModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <a className='owner-button' onClick={() => setShowModal(true)}>Edit this listing's information</a>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <OwnerEdit setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}   

export default OwnerEditModal;