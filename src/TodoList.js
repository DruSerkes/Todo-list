import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';
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
		const newTodo = { text, id: uuid(), editing: false };
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

	const toggleEditing = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		todo.editing = !todo.editing;
		setTodos((todos) => [ ...todos ]);
	};

	const editTodo = ({ id, text }) => {
		const todo = todos.find((todo) => todo.id === id);
		todo.editing = !todo.editing;
		todo.text = text;
		setTodos((todos) => [ ...todos ]);
	};

	const checkIfEditing = (todo) => {
		return todo.editing ? (
			<EditTodoForm text={todo.text} id={todo.id} editTodo={editTodo} key={todo.id} />
		) : (
			<Todo text={todo.text} key={todo.id} id={todo.id} removeTodo={removeTodo} toggleEditing={toggleEditing} />
		);
	};

	return (
		<div className="TodoList">
			<h1 className="TodoList-Header">My Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<div className="TodoList-Container">{todos.map((todo) => checkIfEditing(todo))}</div>
		</div>
	);
};

export default TodoList;
