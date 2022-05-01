const URL = "https://assets.breatheco.de/apis/fake/todos/user/emmanuel";

export const getTodos = () =>
	fetch(URL, {
		method: "GET",
	});

export const putTodos = () =>
	fetch(URL, {
		method: "PUT",
		body: JSON.stringify(listTodo),
		headers: {
			"Content-Type": "application/json",
		},
	});
