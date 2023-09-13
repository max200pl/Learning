# Advanced CONCEPTS TypeScript

## Implements keyword

```typescript
type Animal = {
  name: string;
  voice(): string;
};

function log(animal: Animal) {
  console.log(`Animal: ${animal.name}: ${animal.voice()}`);
}

class Cat implements Animal {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}

class Dog implements Animal {
  constructor(public name: string) {}
  voice() {
    return "woof";
  }
}

log(new Cat("Salem"));
log(new Dog("Lassie"));
```

## Use define Type Guards

```typescript
type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;
// use define type guards (shape is Square)
function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensure: never = shape;
  return _ensure;
}
```

## Assertion type

1. if one parameter in function have true state this function will return

```typescript
type Person = {
  name: string;
  dateOfBirth?: Date;
};

//* assertion function
function assert(condition: unknown, message: string): asserts condition {
    //! only return value if the condition asserts true
    if (!condition) {
        trow new Error(message);
    }
}

//* assertion function
                                // asserts parameterName is type
function assertDate(value: unknown): asserts value is Data {
    if (value instanceof Date) return
    else throw new Error("value is not a Data")
}

const maybePerson = loadPerson();

assert(maybePerson != null, "Could not load person");
console.log("Name:", maybePerson.nama);

assertDate(maybePerson.dateOfBirth);

console.log("Date of Birth:", maybePerson.dateOfBirth.toISOString());
```

## Function Overloading

1. this approach used only TS
2. now we now what tape function returns
   2.1 First example

   ```typescript
   function reverse(string: string): string; // set type return string
   function reverse(stringArray: string[]): string[]; // set type return array
   function reverse(stringOrArray: string | string[]) {
       if (typeOf stringOrArray === 'string') {
           return stringOrArray.split("").reverse().join("");
       } else {
           return stringOrArray.slice().reverse();
       }
   }

   const hello = reverse("hello"): // set type return string
   const h_e_l_l_0 = reverse("h_e_l_l_0"): // set type return array

   ```

   2.2 Second example:

   ```typescript
   function makeDate(timesStamp: number): Date;
   function makeDate(year: number, month: number, day: number): Date;
   function makeDate(timesStampOrYear: number, month?: number, day?: number): Date{
       if (month !null && day !null) {
           return new Date(timesStampOrYear, month-1, day);
       }else {
           return new Date(timesStampOrYear);
       }
   }

   const doomsDay = makeDate(2000, 1,1); // 1 Jan 2000;
   const epoch = makeDate(0); // 1 Jun 1970;

   <!-- const Invalid = makeDate(2000,1 /* Error: ignored */) -->
   ```

## Call Signatures

1. Work with functions:

   ```typescript
   type Add = (a: number, b: number) => number;

   interface Add3 {
     (a: number, b: number): number;
   }

   type Add2 = {
     (a: number, b: number): number;
     (a: number, b: number, c: number): number;
     debugName?: string;
   };

   add.debugName = "Addition Function";

   const add: Add2 = (a: number, b: number, c?: number) => {
     return a + b + (c != null ? c : 0);
   };
   ```

2. Work with classes

   ```typescript
   type PointCreator = new (x: number, y: number) => { x: number; y: number };

   type PointCreator1 = {
     new (x: number, y: number): { x: number; y: number };
   };

   const Point: PointCreator1 = class {
     constructor(public x: number, public y: number) {}
   };
   ```

3. Work with classes and functions

   ```typescript
   type Add2 = {
     new (x: number, y: number): { x: number; y: number };
     new (x: number, y: number, z: number): { x: number; y: number; z: number };
     (x: number, y: number): { x: number; y: number };
     (x: number, b: number, z: number): { x: number; y: number; z: number };
     debugName: string;
   };
   ```
