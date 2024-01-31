import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => { //<{ onAddTodo: (text: string) => void }> 
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null); // HTMLInputElement if use input if use paragraph HTMLParagraphElement (так как инпут построен на HTMLInputElement интерфейсе)

    const submitHandler = (event: React.FormEvent) => { // React.MouseEvent or other event
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText?.trim().length === 0) {
            // trow an error 
            return
        }

        todosCtx.addTodo(enteredText)
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}></input>
            <button>Add todo</button>
        </form>
    )
}

export default NewTodo;