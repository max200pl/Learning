import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";


const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className="todos">
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // ( null -> this keyword, first argument return later )
                />
            ))}
        </ul>
    );
};

export default Todos;
