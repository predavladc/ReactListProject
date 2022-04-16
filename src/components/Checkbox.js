const Checkbox = (props) => {
    return (
        <input type="checkbox" onClick={() => props.onClickBox(props.data.id)}/>
    );
};

export default Checkbox;