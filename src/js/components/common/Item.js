import React from 'react';
import AutoSizeInput from '../../util/AutoSizeInput';
import { SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle((props) => {
	return (
		<i className={`fas fa-bars ${props.type}-item__icon ${props.type}-item__icon--hamburger item__icon`}></i>
	)
})

const Item = props => {
	const {
		goalkey,
		type,
		value,
		isOpen,
		isComplete,
		onChange,
		onKeyPress,
	} = props;

	const completeIcon = isComplete ? 'far fa-caret-circle-up' : 'fas fa-check'

	return (
		<div className={`${type}-item item ${isComplete && 'complete'}`}>
			<DragHandle type={type}/>
			<AutoSizeInput
				defaultHeight={42}
				className="input"
				type={type}
				onChange={(e) => onChange('value', e.target.value, goalkey)}
				onKeyPress={onKeyPress}
				value={value}
				disabled={isComplete}
			/>
			<i
				className={`${completeIcon} ${type}-item__icon ${type}-item__icon--check item__icon`}
				onClick={() => onChange('isComplete', !isComplete, goalkey)}
			></i>
			<i className={`fas fa-chevron-up ${type}-item__icon ${type}-item__icon--chevron item__icon`}></i>
		</div>
	)
}

export default Item;