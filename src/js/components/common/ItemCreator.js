import React from 'react';

const ItemCreator = props => {
	const { type, onChange, value, placeholder } = props;
	return (
		<input
			className={`${type}-creator creator`}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
		/>
	)
}

export default ItemCreator;