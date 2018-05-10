import React from 'react';

const ItemCreator = props => {
	const { type, onChange, onKeyPress, value, placeholder } = props;
	return (
		<input
			className={`${type}-creator creator`}
			onChange={onChange}
			onKeyPress={onKeyPress}
			value={value}
			placeholder={placeholder}
		/>
	)
}

export default ItemCreator;