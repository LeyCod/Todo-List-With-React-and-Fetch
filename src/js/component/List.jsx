import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-4 border border-primary p-2 rounded shadow mb-2">
					<div className="d-flex flex-row justify-content-between align-items-center">
						{props.todo}
						<button
							className="btn btn-danger"
							onClick={() => props.deleteTask(props.id)}>
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

List.propTypes = {
	todo: PropTypes.string,
	deleteTask: PropTypes.func,
};

export default List;
