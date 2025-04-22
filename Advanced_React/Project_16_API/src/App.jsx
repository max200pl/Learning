import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaginatedQuotes from "./components/paginated-quotes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <PaginatedQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
