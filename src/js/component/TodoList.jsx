import React, { useState, useEffect } from "react";
import { getTodos } from "../../service/todolist.js";

//Components
import List from "./List.jsx";

const TodoList = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	useEffect(() => {
		getTodos()
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	}, []);

	//Handel events

	const handelClick = () => {
		const newListTodo = [...listTodo, newTodo];
		setListTodo(newListTodo);
		setNewTodo("");
	};

	const handelKeyEnter = (e) => {
		if (e.code === "Enter") {
			const newListTodo = [...listTodo, newTodo];
			setListTodo(newListTodo);
			setNewTodo("");
		}
	};

	// Delete Task

	const deleteTask = (id) => {
		console.log(id);
		const deleteTodo = listTodo.filter((todo, index) => index !== id);
		setListTodo(deleteTodo);
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
								value={newTodo}
								onChange={(e) => setNewTodo(e.target.value)}
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
						todo={todo}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
