import React from 'react';

/**
 * returns a new Todo with remove button  
 */

const Todo = ({ id, removeTodo, text }) => {
	const handleRemove = (e) => {
		const { id } = e.target;
		removeTodo(id);
	};
	return (
		<div key={id} className="Todo">
			<span>{text}</span>
			<button id={id} className="Todo-Remove" onClick={handleRemove}>
				ⅹ
			</button>
		</div>
	);
};

export default Todo;
