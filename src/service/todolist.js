const URL = "https://assets.breatheco.de/apis/fake/todos/user/emmanuelleyan";

export const getTodos = () =>
	fetch(URL, {
		method: "GET",
	});

export const postTodos = () =>
	fetch(URL, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
