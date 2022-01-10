import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div>
				<h4>{this.props.task.task}</h4>
			</div>
		);
	}
}

export default Todo;
