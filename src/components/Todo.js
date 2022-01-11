import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	handleClick = () => {
		this.props.handleToggle(this.props.task);
	};

	render() {
		return (
			<div
				onClick={this.handleClick}
				className={`task-${this.props.task.completed} div`}
			>
				<h4>{this.props.task.task}</h4>
			</div>
		);
	}
}

export default Todo;
