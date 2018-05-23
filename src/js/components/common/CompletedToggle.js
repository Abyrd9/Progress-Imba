import React from 'react';

const CompletedToggle = props => {
	const { type, leftText, rightText, leftClick, rightClick } = props;
	return (
		<div className={`${type}-toggle toggle`}>
			<button
				className={`${type}-toggle__button ${type}-toggle__button--left toggle__button`}
				onClick={leftClick}
			>
				{leftText}
			</button>
			<button
				className={`${type}-toggle__button ${type}-toggle__button--right toggle__button`}
				onClick={rightClick}
			>
				{rightText}
			</button>
		</div>
	)
}

export default CompletedToggle;