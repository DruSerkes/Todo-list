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
		<li key={key} id={id} className="Todo">
			{text}

			<button id={id} className="Todo-Remove" onClick={handleRemove}>
				ⅹ
			</button>
		</li>
	);
};

export default Todo;
