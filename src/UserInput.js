const UserInput = ({ onNewTask, onInput }) => {
    const {title, description } = UserInput;
    return (
      <form  onSubmit={onNewTask}>
        <input
          type="text"
          placeholder="Add your Task"
          value={title}
          name="title"
          onChange={onInput}
        />
        <input
          type="text"
          placeholder="Describe your Task"
          value={description}
          name="description"
          onChange={onInput}
        />
        <button>Add</button>


      </form>
    );
  };
  
  export default UserInput;
  