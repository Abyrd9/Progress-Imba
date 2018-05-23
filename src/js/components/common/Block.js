import React from 'react';

const Block = props => {
	const { type, children, isComplete } = props;
	return (
		<div className={`${type}-block block ${isComplete && 'complete'}`}>
			{children}
		</div>
	)
}

export default Block;