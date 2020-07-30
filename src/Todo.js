import React from 'react';

/**
 * Box- this component should display a div with a background color, width and height based on the props passed to it.
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
