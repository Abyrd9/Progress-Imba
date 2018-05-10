import React from 'react';

const Container = props => {
	const { type, children } = props;
	return (
		<div className={`${type}-container container`}>
			{children}
		</div>
	)
}

export default Container;