import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = (req, res, next) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://portfolio-react-5b7d3-default-rtdb.firebaseio.com/cart.json");

            if (!response.ok) {
                throw new Error("Fetching cart data failed.");
            }
            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(
                {
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity
                },
            ));
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => { // redux toolkit принимает не только объект но и функцию и вызывает внутри этой функции другие dispatch 
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending",
                message: "Sending cart data!",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://portfolio-react-5b7d3-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }
        }
        dispatch(
            uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sending cart data successfully!",
            })
        );

        try {
            await sendRequest()
        } catch (e) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    }
}