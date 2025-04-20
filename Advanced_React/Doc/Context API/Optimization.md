# Context API Optimization

## Topics Optimization

    ### 1 Topic Problem

        Rendering all components that use the context when the context state changes.

    ### 2 Topic Improvement

        Move the context to a separate file.

## Optimization step 1

### Use useDispatchContext for UseContext

#### Problem

If we use useContext() without checking for null, it can lead to runtime errors if the context is not provided.

#### Result

Create a wrapper for useContext that returns the context value or throws an error if the context is not found

```tsx
import { useContext } from 'react';

type CartContext = {
    state: {
        cart: CartItem[];
        totalPrice: number;
    };
    dispatch: React.Dispatch<Action>;
};

export const DispatchContext = React.createContext<CartContext | null>(null);

export function useDispatchContext() {
    const value = useContext(DispatchContext);

    if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
    }

    return value;
}
```

### Optimization step 2

#### Create a separate file for the context

```tsx
type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action.");
  }
}

export function useStateContext() {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}

export function useDispatchContext() {
  const value = useContext(DispatchContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}
```

### Optimization step 3

Create Separated Contexts for State and Dispatch

```tsx

type StateContext = { count: number };
type DispatchContext = Dispatch<Action>;

export const StateContext = createContext<StateContext | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

```

#### Use CartProvider in the App component

```tsx
function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}
```
