# API Layer Helpers

## Handling Errors

```javascript
export async function withAsync(fn) {
  try {
    if (typeof fn !== "function")
      throw new Error("The first argument must be a function");

    const { data } = await fn();
    return {
      response: data,
      error: null,
    };
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
}
```

## Logging

```javascript
const withLogger = async (promise) =>
  promise.catch((error) => {
    /*
     *Always log errors in dev environment
     *if (process.env.NODE_ENV !== 'development') throw error
     */

    // Log error only if REACT_APP_DEBUG_API env is set to true
    if (!process.env.REACT_APP_DEBUG_API) throw error;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest
      // in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    throw error;
  });

const api = (axios) => {
  return {
    get: (url, config = {}) => withLogger(withAbort(axios.get)(url, config)),
    delete: (url, config = {}) =>
      withLogger(withAbort(axios.delete)(url, config)),
    post: (url, body, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
    patch: (url, body, config = {}) =>
      withLogger(withAbort(axios.patch)(url, body, config)),
    put: (url, body, config = {}) =>
      withLogger(withAbort(axios.put)(url, body, config)),
  };
};

export default api(axiosInstance);
```
