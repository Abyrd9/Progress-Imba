import React from 'react';

const PopUp = props => {
	const { type, alert } = props;
	return (
		<div className={`${type}-popup popup`}>
			<p className={`${type}-popup__alert popup__alert`} >{alert}</p>
      <div className={`${type}-popup__button-container popup__button-container`}>
        <i className={`fas fa-times ${type}-popup__no popup__no`}></i>
        <i className={`fas fa-check ${type}-popup__yes popup__yes`}></i>
      </div>
		</div>
	)
}

export default PopUp;