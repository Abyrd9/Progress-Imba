import React from 'react';

const Block = props => {
	const { type, children } = props;
	return (
		<div className={`${type}-block block`}>
			{children}
		</div>
	)
}

export default Block;