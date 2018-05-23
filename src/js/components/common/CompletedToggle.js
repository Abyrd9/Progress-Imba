import React from 'react';

const CompletedToggle = props => {
	const { type, leftText, rightText, leftClick, rightClick, activeTab } = props;
	const activeClass = activeTab === 'active' ? 'active' : '';
	const completedClass = activeTab === 'completed' ? 'active' : '';
	return (
		<div className={`${type}-toggle toggle`}>
			<button
				className={`${type}-toggle__button ${type}-toggle__button--left toggle__button ${activeClass}`}
				onClick={leftClick}
			>
				{leftText}
			</button>
			<button
				className={`${type}-toggle__button ${type}-toggle__button--right toggle__button ${completedClass}`}
				onClick={rightClick}
			>
				{rightText}
			</button>
		</div>
	)
}

export default CompletedToggle;