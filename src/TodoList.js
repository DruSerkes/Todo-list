import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

/**
 * TodoList - this component should render the NewTodoForm component 
 * and should render the list of Todo components. 
 * Place your state that contains all of the todos in this component.
 */

const TodoList = () => {
	const INITIAL_STATE = [];
	// update this so initial state is set by localStorage
	const [ todos, setTodos ] = useState(INITIAL_STATE);

	const addTodo = ({ text }) => {
		setTodos((todos) => [ ...todos, { text, id: uuid() } ]);
		// add to localStorage
	};

	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
		// update localStorage
	};

	const editTodo = ({ id, text }) => {
		// TODO
	};

	return (
		<div className="TodoList">
			<h1 className="TodoList-Header">My Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<ul className="TodoList-Container">
				{todos.map((todo) => <Todo text={todo.text} key={todo.id} id={todo.id} removeTodo={removeTodo} />)}
			</ul>
		</div>
	);
};

export default TodoList;
