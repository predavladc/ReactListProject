const ToDoComponent = (props) => {
    return (
                <div className="task-container">
                <h4 className="task">{props.data.task}</h4>
                <span className="description">{props.data.description}</span>
            </div>
    );
};

export default ToDoComponent;