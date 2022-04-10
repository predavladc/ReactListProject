const ToDoComponent = (props) => {
    return (
                <><div className="task-container">
            <h3 className="task-title">{props.data.title}</h3>
            <span className="task-description">{props.data.description}</span>
        </div><br /><div className='buttons'>
                <button button type="button" class="btn btn-primary" onClick={() => props.onEdit(props.data.id)}>Edit</button>
                <button type="button" class="btn btn-danger" onClick={() => props.onDelete(props.data.id)}>Delete</button>
            </div></>
              
    );
};

export default ToDoComponent;



