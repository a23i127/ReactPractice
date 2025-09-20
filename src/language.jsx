import React from 'react';

function Language(props) {
  return (
    <div className="language-card">
      <img src={props.image} alt={props.name} />
      <div className="language-name">{props.name}</div>
    </div>
  );
}

export default Language;