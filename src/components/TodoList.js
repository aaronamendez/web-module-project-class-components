// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from '../components/Todo';

class TodoList extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				{this.props.tasks.map((task) => {
					return (
						<Todo
							key={task.id}
							handleToggle={this.props.handleToggleTodo}
							task={task}
						/>
					);
				})}
			</div>
		);
	}
}

export default TodoList;
