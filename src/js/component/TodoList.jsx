import React, { useState, useEffect } from "react";
import { getTodos } from "../../service/todolist.js";

//Components
import List from "./List.jsx";

const TodoList = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState({ label: "", done: false });

	const ApiGetTodos = async () => {
		await getTodos()
			.then((response) => response.json())
			.then((data) => setListTodo(data))
			.catch((error) => console.log(error));
	};

	const ApiPutData = async (newData) => {
		await putTodos(newData)
			.then((response) => response.json())
			.then((data) => ApiGetTodos())
			.catch((error) => console.log(error));
	};

	//useEffect hook

	useEffect(() => ApiGetTodos(), []);

	//Handel events

	const handelClick = () => {
		const newListTodo = [...listTodo, newTodo];
		ApiPutData(newListTodo);
		setNewTodo({ label: "", done: false });
	};

	const handelKeyEnter = (e) => {
		if (e.code === "Enter") {
			const newListTodo = [...listTodo, newTodo];
			ApiPutData(newListTodo);
			setNewTodo({ label: "", done: false });
		}
	};

	const deleteTask = (id) => {
		const newData = listTodo.filter((todo, index) => index !== id);
		ApiPutData(newData);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div className="input-group mb-3 mt-3">
						<h1 className="input-group justify-content-center">
							Todo List with React and Fetch
						</h1>
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								id="new-task"
								placeholder="Add New Todo"
								aria-label="Add New Todo"
								aria-describedby="basic-addon2"
								value={newTodo.label}
								onChange={(e) =>
									ApiPutData({
										label: e.target.value,
										done: false,
									})
								}
								onKeyPress={handelKeyEnter}
							/>
							<button
								className="btn btn-primary"
								type="button"
								onClick={handelClick}>
								ADD
							</button>
						</div>
					</div>
				</div>
				{listTodo.map((todo, index) => (
					<List
						key={index}
						id={index}
						todo={todo.label}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
