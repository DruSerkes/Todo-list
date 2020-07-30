import React from 'react';

/**
 * returns a new Todo <li> with remove button  
 */

const Todo = ({ key, id, removeTodo, text }) => {
	const handleRemove = (e) => {
		const { id } = e.target;
		removeTodo(id);
	};
	return (
		<div key={key} id={id} className="Todo">
			<span>{text}</span>
			<button id={id} className="Todo-Remove" onClick={handleRemove}>
				ⅹ
			</button>
		</div>
	);
};

export default Todo;
