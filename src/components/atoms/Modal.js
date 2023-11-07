import React, { useState } from 'react';

function Modal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Title</h2>
            <p>This is the modal content. You can add any content here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
