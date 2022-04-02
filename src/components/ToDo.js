import Task from "./Task";

const ToDoComponent = (props) => {
    return (
        <div className="block">
            <Task toDoTask={props.data.title} />
            <Task toDoDescription={props.data.description} />
        </div>
    );
};

export default ToDoComponent;