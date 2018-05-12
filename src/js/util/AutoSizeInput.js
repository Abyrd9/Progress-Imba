import React, { Component } from 'react';
import { isAbsolute } from 'path';

const DEFAULT_HEIGHT = 72;

class AutoSizeInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: DEFAULT_HEIGHT,
		}
		this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
	}
	

	componentDidMount() {
		this.mounted = true;
		this.setFilledTextareaHeight();
	}

  setFilledTextareaHeight() {
    if (this.mounted) {
      const element = this.ghost;
			const height = element.clientHeight > DEFAULT_HEIGHT ? element.clientHeight : DEFAULT_HEIGHT;
      this.setState({
        height,
      });
    }
	}
	
	getExpandableField(props) {
    const isOneLine = this.state.height <= DEFAULT_HEIGHT;
    const { height } = this.state;

		const {
			className,
			value,
			placeholder,
			type,
			onChange
		} = props;

		const classModifier = type ? `${type}-${className}` : '';

    return (
        <textarea
          className={`${classModifier} creator`}
          name="textarea"
					value={value}
					placeholder={placeholder}
          style={{
            height,
            resize: isOneLine ? "none" : null
          }}
          onChange={onChange}
          onKeyUp={this.setFilledTextareaHeight}
        />
    );
	}
	
	getGhostField(props) {
		const {
			className,
			value,
			type
		} = props

		const classModifier = type ? `${type}-${className}` : '';

    return (
      <div
        className={`${classModifier} creator ghost`}
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