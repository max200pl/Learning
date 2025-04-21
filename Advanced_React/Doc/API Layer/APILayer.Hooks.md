# API Layer Hooks

## Use Custom Hook with API Layer

### Prepare Api Statuses

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

const prepareStatuses = (currentStatus) => {
    const statuses = {}
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

```

### Create Custom Hook UseApi()

```javascript

export function useApi(fn, config = {}){
    const {initialData} = config;
    const [ data, setData] = useState();
    const [ error, setError] = useState(null);
    const {status, setStatus, ...normalizeStatuses} = useApiStatus(IDLE);

    const exec  =async (...args) => {
        try {
            setStatus(PENDING);
            const data = await fn(...args);
            setData(data);
            setStatus(SUCCESS);
            return {
                data,
                error: null,
            }
        } catch (error) {
            setError(error);
            setStatus(ERROR);
            return {
                data: null,
                error,
            }
        }
    }

    return {
        data,
        setData,
        status,
        exec,
        ...normalizeStatuses,
    }
}
```

### Fetch Data

```javascript

const useFetchData = () => {
    const { data, exec: initGetData, status: fetchDataStatus,  isIdle:isFetchDataStatusIdle  , isPending:isFetchDataStatusPending, isSuccess:isFetchDataStatusSuccess, isError:isFetchDataStatusError } = useApi( ()=> fetchData().then((res) => res.data) );


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

  return (
    <div>
      <h1>Data</h1>
      <buttons onClick={initGetData}>
        <LayerLoader
          show={isFetchDataStatusPending}
          delay={1000} // 1 second delay
          default={<span>Refresh</span>} // Default button text
         >
      </button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </div>
  );
};
```
