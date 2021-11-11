import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePopUp from './DeleteConfirmation';

const DeleteConfirmationModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Cancel reservation</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeletePopUp setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}   

export default DeleteConfirmationModal;