# APILayer.Lazy.Louder

Problem:
    - If the data loads too quickly, the loader should not be displayed, but if it loads slowly, it should be shown.

## 1 Create a LazyLoader component

```jsx
const LazyLoader = (props) => {
  const { show = false, delay = 0 } = props;
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (!show) {
      setShowLoader(false);
      return;
    }

    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }

    return () => {
      clearInterval(timeout);
    };

  }, [show, delay]);

  return showLoader ? "Loading..." : props.default; // Can be Svg Loader or any other loader component
};
export default LazyLoader;
 ```

## 2 Use LazyLoader in your component

```jsx
const DataComponent = () => {
  const { data, initGetData, loading, error } = useFetchData();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    initGetData();
    setShowLoader(true);
  }, []);

  return (
    <div>
      <LazyLoader show={showLoader} delay={2000} default={<div>Loading...</div>} />
      {data && <div>{JSON.stringify(data)}</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};
```
