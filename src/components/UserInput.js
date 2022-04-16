const UserInput = ({ onNewTask, onInput }) => {
    const {title, description } = UserInput;
    return (
      <form className="add-form" onSubmit={onNewTask}>
        <div className="add-task">
          <label for="FormControlTextarea1" class="form-label"></label>
                <input
                  type="text"
                  placeholder="Add your Task"
                  value={title}
                  name="title"
                  onChange={onInput}
                />
        </div>
        <div className="add-description">
          <label for="FormControlTextarea2" class="form-label"></label>
                <input
                  type="text"
                  placeholder="Describe your Task"
                  value={description}
                  name="description"
                  onChange={onInput}
                />
        </div>
        <div className="add container">
          <div className="row">
                <button className="add-button">Add</button>
          </div>
        </div>

      </form>
    );
  };
  
  export default UserInput;