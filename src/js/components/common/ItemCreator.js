import React from 'react';
import AutoSizeInput from '../../util/AutoSizeInput';

const ItemCreator = props => {
	const { type, defaultHeight, onChange, onKeyPress, value, placeholder } = props;

	return (
		<AutoSizeInput
			defaultHeight={defaultHeight}
			className="creator"
			type={type}
			onChange={onChange}
			onKeyPress={onKeyPress}
			value={value}
			placeholder={placeholder}
		/>
	)
}

export default ItemCreator;