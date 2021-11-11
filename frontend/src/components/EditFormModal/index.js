import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPopup from './EditPopup';

const EditFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Edit reservation dates</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <EditPopup setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}   

export default EditFormModal;