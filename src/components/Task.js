const Task = (props) => {
    return (
      <div className="task-container">
        <h3 className="task-title">{props.toDoTask}</h3>
        <span className="task-description">{props.toDoDescription}</span>
      </div>
    );
  };
  
  export default Task;
  