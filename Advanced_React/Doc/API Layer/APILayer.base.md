# API Layer base

## Create Base API Layer

```javascript

const axiosParams = {
  // Base URL should be set via environment
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    delete: (url, config = {}) => axios.delete(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.patch(url, body, config),
    put: (url, body, config = {}) => axios.put(url, body, config),
  };
};

export default api(axiosInstance);
```

## Use Base API Layer

```javascript
const URLS = {
    GET_DATA: "/api/data",
    POST_DATA: "/api/data",
}

const getData = async () => {
  try {
    const response = await api.get( URLS.GET_DATA, {
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

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

### Use Custom Hook in Component

```javascript
const DataComponent = () => {
  const { data, initGetData, loading, error } = useFetchData();

  useEffect(() => {
     initGetData()
  }, [ ])


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <buttons onClick={initGetData}>Refresh</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </div>
  );
};
```
