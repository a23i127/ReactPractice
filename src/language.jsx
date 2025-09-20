import React, { useState } from 'react';

function Language(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <>
      <div className="language-card" onClick={handleClick} style={{cursor: 'pointer'}}>
        <img src={props.image} alt={props.name} />
        <div className="language-name">{props.name}</div>
      </div>
      {showPopup && (
        <div className="language-popup" onClick={handleClose}>
          <div className="language-popup-content" onClick={e => e.stopPropagation()}>
            <span className="language-popup-close" onClick={handleClose}>&times;</span>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Language;