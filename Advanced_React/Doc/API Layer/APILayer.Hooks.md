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

// "ERROR" >> "Error"
const capitalize  = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const prepareApiStatus = (currentStatus) => {
    const statuses  ={}
    for (const status of defaultApiStatuses) {
        const normalizedStatus = capitalize(status.toLowerCase()); // "Error" >> "error"
        const normalizedStatusKey = `is${normalizedStatus}`; // "isError"
        statuses[normalizedStatusKey] = currentStatus === status; // { isError: true }
    }

    return statuses;
};

export const useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = useState(currentStatus);

  // Set the status to IDLE when the component mounts
  // Use memo to avoid unnecessary re-renders
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};

const useFetchData = () => {
   const [data, setData] = useState(null);
   const {
    status: fetchDataStatus,
    setStatus: setFetchDataStatus,
    isFetchDataStatusIdle,
    isFetchDataStatusPending,
    isFetchDataStatusSuccess,
    isFetchDataStatusError
  } = useApiStatus(IDLE);

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

   return {
    data,
    initGetData,
    fetchDataStatus,
    setFetchDataStatus,
    isFetchDataStatusIdle,
    isFetchDataStatusPending,
    isFetchDataStatusSuccess,
    isFetchDataStatusError
   };
};

```

## Use Custom Hook in Component

```javascript
const DataComponent = () => {
  const {
    data,
    initGetData,
    fetchDataStatus,
    setFetchDataStatus,
    isFetchDataStatusIdle,
    isFetchDataStatusPending,
    isFetchDataStatusSuccess,
    isFetchDataStatusError
   } = useFetchData();

  useEffect(() => {
     initGetData()
  }, [ ])


    if (isFetchDataStatusPending) return <div>Loading...</div>;
    if (isFetchDataStatusError) return <div>Error: {error.message}</div>;
    if (isFetchDataStatusIdle) return <div>Idle...</div>;
    if (isFetchDataStatusSuccess) return <div>Success...</div>;

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
