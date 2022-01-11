import React, { Component } from 'react';

export class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		};
	}

	handleChanges = (e) => {
		this.setState({
			...this.state,
			input: e.target.value,
		});
	};

	handleClearTodos = (e) => {
		e.preventDefault();
		this.props.handleClearCompleted();
	};

	handleSubmit = (e) => {
		// Handler
		e.preventDefault();
		this.props.handleAddTodo(this.state.input);
	};

	handleToggle = () => {
		console.log('Toggle');
		// Handler
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Enter Todo ..."
						onChange={this.handleChanges}
					/>
					<br />
					<button>Add New Todo</button>
					<br />
				</form>
				<button onClick={this.handleClearTodos}>Clear Finished Todo's </button>
			</div>
		);
	}
}

export default TodoForm;
