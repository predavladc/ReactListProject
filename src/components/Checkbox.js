const Checkbox = (props) => {
    return (
        <input type="checkbox" checked={props.completed} onChange={(e) => props.onComplete(props.id, e)}/>
    );
};

export default Checkbox;