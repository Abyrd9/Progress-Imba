import React from 'react';

const Item = props => {
	const {
		type,
		onChange,
		onKeyPress,
		value,
	} = props;
	return (
		<div className={`${type}-item item`}>
			<i className={`fas fa-bars ${type}-item__icon ${type}-item__icon--hamburger item__icon`}></i>
			<input
				className={`${type}-item__input item__input`}
				onChange={onChange}
				onKeyPress={onKeyPress}
				value={value}
			/>
			<i className={`fas fa-check ${type}-item__icon ${type}-item__icon--check item__icon`}></i>
			<i className={`fas fa-chevron-up ${type}-item__icon ${type}-item__icon--chevron item__icon`}></i>
		</div>
	)
}

export default Item;