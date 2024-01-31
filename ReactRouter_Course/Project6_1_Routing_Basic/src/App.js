import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/", // "/" это абсолютный путь если добавим /root/products то не будет работать
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true, path: "", element: <Home /> }, // index: true если путь пустой / показываем  альтернатива => path: ''
            { path: "products", element: <ProductsPage /> }, // /products это абсолютный путь => products это относительный (добавляем в конец строки /root/products)
            { path: "products/:productId", element: <ProductDetail /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
