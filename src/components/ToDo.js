// import Task from "./Task";

const ToDoComponent = (props) => {
    return (
        <div className="block">
            {/* <Task toDoDescription={props.data.description} toDoTask={props.data.title}  /> */}
                <div className="task-container">
                <h3 className="task-title">{props.data.title}</h3>
                <span className="task-description">{props.data.description}</span>
            </div>
        </div>
    );
};

export default ToDoComponent;