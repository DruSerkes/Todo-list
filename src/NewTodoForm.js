import React, { useState } from 'react';

/**
 * NewTodoForm - this component should render a form with one 
 * text input for the task to be created. When this form is 
 * submitted, a new Todo component should be created. - Todo- 
 * this component should display a div with the task of the todo.
 */
const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = { text: '' };
	const [ todoData, setTodoData ] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTodoData((todoData) => ({ ...todoData, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todoData);
		setTodoData(INITIAL_STATE);
	};

	return (
		<div className="NewTodoForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="text"> To do: </label>
				<input
					type="text"
					id="text"
					name="text"
					placeholder="Breakfast..."
					value={todoData.text}
					onChange={handleChange}
				/>
				<button>Add</button>
			</form>
		</div>
	);
};

export default NewTodoForm;
