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
	return (
		<div className={`${type}-item item`}>
			<DragHandle type={type}/>
			<AutoSizeInput
				defaultHeight={42}
				className="input"
				type={type}
				onChange={(e) => onChange('value', e.target.value, goalkey)}
				onKeyPress={onKeyPress}
				value={value}
			/>
			<i className={`fas fa-check ${type}-item__icon ${type}-item__icon--check item__icon`}></i>
			<i className={`fas fa-chevron-up ${type}-item__icon ${type}-item__icon--chevron item__icon`}></i>
		</div>
	)
}

export default Item;