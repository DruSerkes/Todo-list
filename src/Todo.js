import React from 'react';

/**
 * returns a div with the todo text, an edit and remove button  
 */

const Todo = ({ id, removeTodo, editTodo, text }) => {
	const handleRemove = (e) => {
		const { id } = e.target.parentElement;
		removeTodo(id);
	};
	const handleEdit = (e) => {
		const { id } = e.target.parentElement;
		editTodo(id);
	};
	return (
		<div key={id} id={id} className="Todo">
			<span>{text}</span>
			<button className="Todo-Edit" onClick={handleEdit}>
				edit
			</button>
			<button className="Todo-Remove" onClick={handleRemove}>
				ⅹ
			</button>
		</div>
	);
};

export default Todo;
