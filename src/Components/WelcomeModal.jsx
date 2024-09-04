import React, { useState, useEffect } from 'react';
import '../Styles/WelcomeModal.css';

const WelcomeModal = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
     const timer = setTimeout(() => {
       setIsVisible(false);
     }, 5000); // 5 segundos

     return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
      <div className="welcome-modal_V2">
      <div className="modal-content_V2">
        <button className="close-button_V2" onClick={handleClose}>
          &times;
        </button>
        <img src={imageUrl} alt="Welcome" className="welcome-image_V2" />
      </div>
    </div>
  );
};

export default WelcomeModal;
