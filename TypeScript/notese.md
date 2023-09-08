# Basic npm commands for TS project

```cmd
npm init -y
npm i typescript
npx tsc --init                            // initialization ts config (tsconfig.json)
npx tsc --init --rootdir src --outdir lib // config where take ts and where put js
npx tsc --watch                           // watcher for changes for TS project
```

## New JS type Bigint

```typescript
// new type
let bigint: bigint = 24n;

// Tuple type
let tuple: [number, number] = [0, 0];
```

## Tuple type

```typescript
// Tuple type
let tuple: [number, number] = [0, 0];
```

## doc type annotation

```typescript
type Point2d = { x: number; y: number };
type Point3d = { x: number; y: number; z: number };

let point2d: Point2d = { x: 0, y: 0 };
let point3d: Point3d = { x: 0, y: 0, z: 0 };

/* EXTRA info ok */

point2d = Point3d;
function takesPoint2d(point2d: Point2d) {}
takesPoint2d(point3d);

// Error !!!
point3d = Point2d; // Error
function takesPoint3d(point3d: Point3d) {}
takesPoint3d(point2d); // Error
```

## Unknown type

1. If you don't know what type you are looking

```typescript
let exampleUnknown:unknown; // I don't now what is the type

if (typeOf exampleUnknown === "string") {
    exampleUnknown.trim()
}

if (typeOf exampleUnknown === "boolean") {
    let boolean: boolean = exampleUnknown
}
```

## Assertions type

1. We are telling the type script compiler "I now what is a type"
2. don't use angel brackets  &lt;string&gt;
3. when you use this type and changed type to another TS don't show error

```typescript
let hello = load()

const timed = (hello as string).trim()
hello = 0; // now can't see !ErrorTS
```

## +(Casting) type

1. We are telling the type script compiler "I now what is a type"

```typescript
 let letters = "hello";
 const number = +letters
 console.log(number === 123123);
```
