import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
	{
		task: 'Cook',
		id: 1,
		completed: false,
	},
	{
		task: 'Clean',
		id: 2,
		completed: false,
	},
	{
		task: 'Jog',
		id: 3,
		completed: false,
	},
];

class App extends Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			tasks: tasks,
		};
	}

	handleAddTodo = (todo) => {
		const todoToAdd = {
			task: todo,
			id: Date.now(),
			completed: false,
		};

		this.setState({
			...this.state,
			tasks: [...this.state.tasks, todoToAdd],
		});
	};

	handleClearCompleted = () => {
		const clearedTodos = this.state.tasks.filter((task) => {
			return task.completed === false;
		});

		this.setState({
			...this.state,
			tasks: clearedTodos,
		});
	};

	handleToggleTodo = (selectedTodo) => {
		this.setState({
			...this.state,
			tasks: this.state.tasks.map((task) => {
				if (task.id === selectedTodo.id) {
					return {
						...task,
						completed: !task.completed,
					};
				} else {
					return task;
				}
			}),
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm
					input={this.state.input}
					handleAddTodo={this.handleAddTodo}
					handleClearCompleted={this.handleClearCompleted}
				/>
				<TodoList
					tasks={this.state.tasks}
					handleToggleTodo={this.handleToggleTodo}
				/>
			</div>
		);
	}
}

export default App;
