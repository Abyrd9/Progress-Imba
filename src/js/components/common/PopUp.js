import React from 'react';

const PopUp = props => {
	const { type, alert, yesClick, noClick } = props;
	return (
		<div className={`${type}-popup popup`}>
			<p className={`${type}-popup__alert popup__alert`} >{alert}</p>
      <div className={`${type}-popup__button-container popup__button-container`}>
        <i
          onClick={noClick}
          className={`fas fa-times ${type}-popup__no-button popup__no-button`}
        ></i>
        <i
          onClick={yesClick}
          className={`fas fa-check ${type}-popup__yes-button popup__yes-button`}
        ></i>
      </div>
		</div>
	)
}

export default PopUp;