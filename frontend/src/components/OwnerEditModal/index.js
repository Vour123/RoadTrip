import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import OwnerEdit from './OwnerEdit';

const OwnerEditModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Edit this listing's information</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <OwnerEdit setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}   

export default OwnerEditModal;