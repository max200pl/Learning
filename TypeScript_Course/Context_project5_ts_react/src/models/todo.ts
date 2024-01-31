//interface// type // class 

class Todo { // используем также как Generic type при передачи пропсов в компоненту 
    id: string;
    text: string;

    constructor(todoText: string) {
            this.text = todoText;
            this.id = new Date().toISOString();
    }
}

export default Todo