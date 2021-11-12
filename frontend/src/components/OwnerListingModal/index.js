import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import OwnerPopUp from './OwnerPopUp';

const OwnerListingModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Edit this listing</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <OwnerPopUp setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}   

export default OwnerListingModal;