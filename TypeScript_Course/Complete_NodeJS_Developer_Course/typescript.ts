function sum(a: number, b: number) {
    return a + b;
}

const answer = sum(10, 20); // 30

console.log(answer)


// Tuple

let basket: [string, number];
basket = ['basketball', 5];


// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: string = Size[2];
let sizeValue: number = Size.Small;

// void
let sing = (): void => {
    console.log('Lalalala');
}

// never
let error = (): never => {
    throw Error('oops');
}

type Style = 'bold' | 'italic' | 23;

interface Person {
    first: string;
    last: string;
    [key: string]: any;
}


// Type assertion
let username: any = 'alex';
let usernameLength = (username as string).length;
