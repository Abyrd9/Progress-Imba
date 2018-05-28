import React, { Component } from 'react';
import produce from 'immer';


class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0,
			speed: .5,
			open: false,
			visible: false,
			opaque: false,
			reverseTransition: false,
			runningTransition: false,
			readyToTransition: true,
		}
		this.transitionStart = this.transitionStart.bind(this)
		this.openTransition = this.openTransition.bind(this)
		this.closeTransition = this.closeTransition.bind(this) 
	}

	componentDidMount() {
		const { defaultHeight } = this.props;
		this.setState(
			produce(draft => {
				draft.height = defaultHeight;
			})
		)
	}

	componentDidUpdate(prevProps, prevState) {
		const { isOpen, defaultHeight, transitionToggle, goalkey } = this.props;
		const { runningTransition, height, reverseTransition } = this.state;
		if (prevProps.isOpen !== isOpen) {
			if (!!this.getHeight && this.getHeight.clientHeight !== defaultHeight) {
				let speed = (Math.round(this.getHeight.clientHeight/98)*.3)/2;
				this.setState(
					produce(draft => {
						draft.height = this.getHeight.clientHeight;
						draft.speed = speed;
					})
				)
				if (!runningTransition) {
					transitionToggle('transitionActive', true, goalkey);
					this.transitionStart();
					setTimeout(() => {
						reverseTransition
							? this.closeTransition(transitionToggle, goalkey)
							: this.openTransition(transitionToggle, goalkey);
					}, 100)
				}
			}
		}
	}
 
	transitionStart = () => {
		this.setState(
			produce(draft => {
				draft.readyToTransition = false;
				draft.runningTransition = true;
			})
		)
	}

	openTransition = (transitionToggle, goalkey) => {
		this.setState(
			produce(draft => {
				draft.open = true;
				draft.visible = true;
				draft.opaque = true;
			})
		)
		setTimeout(() => {
			this.setState(
				produce(draft => {
					draft.runningTransition = false;
					draft.readyToTransition = true;
					draft.reverseTransition = true;
				})
			)
			transitionToggle('transitionActive', false, goalkey);
		}, (this.state.speed*1000) + 300)
	}

	closeTransition = (transitionToggle, goalkey) => {
		this.setState(
			produce(draft => {
				draft.open = false;
				draft.opaque = false;
			})
		)
		setTimeout(() => {
			this.setState(
				produce(draft => {
					draft.runningTransition = false;
					draft.readyToTransition = true;
					draft.reverseTransition = false;
				})
			)
			transitionToggle('transitionActive', false, goalkey);
		}, (this.state.speed*1000)+300)
	}

	render() {
		const { children, isOpen } = this.props;
		const {
			height,
			speed,
			visible,
			opaque,
			reverseTransition,
			runningTransition,
			readyToTransition,
		} = this.state;

		const containerStyle = {
			maxHeight: `${isOpen ? `${height}px` : '0'}`,
			visibility: `${visible ? 'visible' : 'hidden'}`,
			opacity: `${opaque ? '1' : '0'}`,
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			transition: `${
				reverseTransition
					? `opacity .3s ease, max-height ${speed}s ease .3s`
					: `max-height ${speed}s ease, opacity .3s ease ${speed}s`
			}`
		}

		return (
				<div style={containerStyle}>
					<div ref={(div) => { this.getHeight = div; }}>
						{children}
					</div>
				</div>
		)
	}
}

export default Dropdown;