import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
// import './TodoList.css';

/**
 * TodoList - this component renders the NewTodoForm component 
 * and a list of Todo components. 
 */

const TodoList = () => {
	const INITIAL_STATE = JSON.parse(localStorage.getItem('todos')) || [];
	const [ todos, setTodos ] = useState(INITIAL_STATE);

	const addTodo = ({ text }) => {
		const newTodo = { text, id: uuid() };
		const updatedTodos = [ ...todos, newTodo ];
		setTodos((todos) => [ ...todos, newTodo ]);
		updateLocalStorage(updatedTodos);
	};

	const updateLocalStorage = (updatedTodos) => {
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
	};

	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		const updatedTodos = storedTodos.filter((todo) => todo.id !== id);
		updateLocalStorage(updatedTodos);
	};

	const editTodo = ({ id, text }) => {
		// TODO
	};

	return (
		<div className="TodoList">
			<h1 className="TodoList-Header">My Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<div className="TodoList-Container">
				{todos.map((todo) => <Todo text={todo.text} key={todo.id} id={todo.id} removeTodo={removeTodo} />)}
			</div>
		</div>
	);
};

export default TodoList;
