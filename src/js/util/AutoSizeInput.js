import React, { Component } from 'react';
import { isAbsolute } from 'path';

class AutoSizeInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 'auto',
		}
		this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
	}
	

	componentDidMount() {
		this.mounted = true;
		const { defaultHeight } = this.props;
		this.setFilledTextareaHeight(defaultHeight);
	}

  setFilledTextareaHeight(defaultHeight) {
    if (this.mounted) {
			const element = this.ghost;
			const height = element.clientHeight > defaultHeight ? element.clientHeight + 10 : defaultHeight;
      this.setState({
        height,
      });
    }
	}
	
	getExpandableField(props) {
    const isOneLine = this.state.height <= props.defaultHeight;
    const { height } = this.state;
		const {
			className,
			value,
			placeholder,
			type,
			onChange,
			onKeyPress,
			disabled
		} = props;

    return (
        <textarea
          className={`${type}-${className} ${className}`}
          name="textarea"
					value={value}
					placeholder={placeholder}
          style={{
            height,
            resize: isOneLine ? "none" : null
          }}
					onChange={onChange}
					onKeyPress={onKeyPress}
					onKeyUp={() => {this.setFilledTextareaHeight(props.defaultHeight)}}
					disabled={disabled}
        />
    );
	}
	
	getGhostField(props) {
		const {
			className,
			value,
			type
		} = props

    return (
      <div
        className={`${type}-${className} ${className} ghost`}
        ref={(c) => this.ghost = c}
        aria-hidden="true"
      >
        {value}
      </div>
    );
  }

	render() {
			return (
				<div style={{position: 'relative', width: '100%'}}>
					{this.getExpandableField(this.props)}
					{this.getGhostField(this.props)}
				</div>
			)
	}
}

export default AutoSizeInput;