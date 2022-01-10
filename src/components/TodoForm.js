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

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Enter Todo ..."
						onChange={this.handleChanges}
					/>
					<br />
					<button>Add New Todo</button>
					<br />
					<button>Clear Finished Todo's </button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
