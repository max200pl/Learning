# Expert CONCEPTS TypeScript

## typeof type operator

1. Created type use dynamically schema

   ```typescript
   const center = {
     x: 0,
     y: 0,
     z: 0,
   };

   type Point = typeof center;

   const unit: typeof center = {
     // :typeof center = {  Shorthand annotation inline
     x: center.x + 1,
     y: center.y + 1,
     z: center.z + 1,
   };
   ```

2. Use in function

   ```typescript
   const personResponse = {
     name: "John",
     email: "john@example.com",
     firstName: "John",
     lastName: "John",
   };

   type PersonResponse = typeof personResponse;

   function processResponse(person: PersonResponse) {
     console.log("Full name: " + person.firstName + " " + person.lastName);
   }
   ```

## Lookup types

1. For example we working with Response data and need get dynamic types

```typescript
export type SubmitRequest = {
  transactionId: string;
  personal: {
    title: string;
    email: string;

    previousAliases: {
      firstName: string;
      middleName: string;
      lastName: string;
    }[];
  };

  payment: {
    creditCard: string;
  };
};

type PaymentRequest = SubmitRequest["payment"]; //<<<>>> Lookup types
type PreviousAliasesRequest = SubmitRequest["personal"]["previousAliases"][0]; //<<<>>> Lookup types

export function getPayment(): PaymentRequest {
  return {
    creditCard: "adasa123assfafaf",
  };
}
```

## keyof type operator

1. get all keys in Object

```typescript
type Person = {
  name: string;
  age: number;
  location: string;
};

const john: Person = {
  nama: "John",
  age: 36,
  location: "Melbourne",
};

function logGet(obj: any, key: keyof Person) {
  // keyof Person =>> name | age | location
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}
//========= OR ==========
function logGet1<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  // <Obj, Key extends keyof Obj>
  // 1. Generic type Obj and Generic type Key
  // 2. Key will be something that is in the Key of Obj
  // 3. function will be return Obj[Key]

  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

const age = logGet(jon, "age"); // 36
console.log(logGet(jon, "email")); //! Error
//              Generic, Generic Constrains
function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[key] // Obj[key] -> Lookup type
) {
  console.log("Setting:", key, value);
  obj[key] = value;
}

logSet(jon, "age", 36);
```
