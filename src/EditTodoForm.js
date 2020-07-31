import React, { useState } from 'react';

/**
 * EditTodoForm - this component renders a form with one 
 * text input for the task to be edited. When this form is 
 * submitted, a current todo component is be updated. 
 * 
 * @param 
 */
const EditTodoForm = ({ editTodo, text }) => {
	const INITIAL_STATE = { text };
	const [ todoData, setTodoData ] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTodoData((todoData) => ({ ...todoData, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(todoData);
		// setTodoData('');
	};

	return (
		<div className="EditTodoForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="text">Edit: </label>
				<input
					type="text"
					id="text"
					name="text"
					placeholder="Lunch..."
					value={todoData.text}
					onChange={handleChange}
				/>
				<button>Edit</button>
			</form>
		</div>
	);
};

export default EditTodoForm;
