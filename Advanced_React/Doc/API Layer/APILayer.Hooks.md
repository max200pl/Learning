# API Layer Hooks

## Use Custom Hook with API Layer

```javascript

export const IDLE = "IDLE";
export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const defaultApiStatuses = ["IDLE", "PENDING", "SUCCESS", "ERROR"];

export const apiStatus = {
  IDLE,
  PENDING,
  SUCCESS,
  ERROR,
};

const useFetchData = () => {
   const [data, setData] = useState(null);
   const [fetchDataStatus, setFetchDataStatus] = useState(IDLE);

   const initGetData = async ()=>{
       setFetchDataStatus(PENDING);

       const { response, error } = await withAsync(() => useGetData());

       if (error) {
           setFetchDataStatus(ERROR);
       } else {
           setFetchDataStatus(SUCCESS);
           setData(response.data);
       }
   }

   return { data, initGetData,  fetchDataStatus };
};

```

## Use Custom Hook in Component

```javascript
const DataComponent = () => {
  const { data, initGetData, fetchDataStatus } = useFetchData();

  useEffect(() => {
     initGetData()
  }, [ ])


  if (fetchDataStatus === PENDING) return <div>Loading...</div>;
  if (fetchDataStatus === ERROR) return <div>Error: {error.message}</div>;

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
