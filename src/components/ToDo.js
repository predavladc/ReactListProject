import React from "react";

const ToDoComponent = (props) => {

    return (
        <>
            <div className="task-container">
            <div className={props.data.completed ? 'task-container completed' : 'task-container'}>
                <h3 className="task-title">{props.data.title}</h3>
                <span className="task-description">{props.data.description}</span>
                </div>
            </div>
                <br />
            <div className='buttons'>
                <button button type="button" className="btn btn-edit" onClick={() => props.onEdit(props.data.id)}>Edit</button>
                <button type="button" className="btn btn-delete" onClick={() => props.onDelete(props.data.id)}>Delete</button>
            </div>
        </>   
    );
};

export default ToDoComponent;



