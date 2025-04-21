# API Layer Hooks

## Use Custom Hook with API Layer

```javascript

const useFetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const initGetData = async ()=>{
      try {
        setLoading(true);
        const response = await useGetData();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    return { data, initGetData, loading, error };
};

```
