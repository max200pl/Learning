

const TodoItem: React.FC<{
    text: string;
    onRemoveTodo: () => void;
}> = (props) => {
    return (
        <li className="item" onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    );
};

export default TodoItem;
