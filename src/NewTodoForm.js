import React, { useState } from 'react';

/**
 * NewTodoForm - this component should render a form with one 
 * text input for the task to be created. When this form is 
 * submitted, a new Todo component should be created. - Todo- 
 * this component should display a div with the task of the todo.
 */
const NewTodoForm = ({ addBox }) => {
	const INITIAL_STATE = { text: '' };
	const [ todoData, setTodoData ] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTodoData((todoData) => ({ ...todoData, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox(boxData);
		setBoxData(INITIAL_STATE);
	};

	return (
		<div className="NewBoxForm">
			<h2 className="NewBoxForm-Header">Add Todo</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="width"> Width: </label>
				<input
					type="number"
					min="10"
					max="500"
					step="5"
					id="width"
					name="width"
					placeholder="10"
					value={boxData.width}
					onChange={handleChange}
				/>
				<button>Add</button>
			</form>
		</div>
	);
};

export default NewBoxForm;
