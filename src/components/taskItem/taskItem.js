import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = (props) => {
  return (
    <div className="task-item dGrid">
      <div className="task-name">{props.name}</div>
      <div className="action-buttons dFlex">
        <button className="delete-task button-task"> <FontAwesomeIcon icon={faTrash}/> </button>
        <button className="edit-task button-task"> <FontAwesomeIcon icon={faEdit}/> </button>
      </div>
    </div>
  );
};

export default TaskItem;
