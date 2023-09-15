import { useState, useEffect } from "react"
import ErrorCard from "../../../util/card/errorCard/errorCard";
import { Spinner } from "../../../util/spinner/spinner";
import OrderLists from "./ordersLists/orderLists";


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const getAllOrders = async () => {
            setSpinner(true)
            try {
                const response = await fetch("");
                if(!response.ok) {
                    throw new Error("Error");
                }
                const responseData = await response.json();
                setSpinner(false)
                setOrders(responseData);
                console.log("from admin orders component", responseData)
            } catch(err) {
                setSpinner(false)
                setError(err.message);
            }
        };
        getAllOrders();
    }, [])


    return (
        <>
            {spinner && <Spinner />}
            {error && <ErrorCard error={error} />}
            {orders.length !== 0 ? orders.map(order => <OrderLists key={order.id} />) : <div>No Orders yet!</div>}
        </>
    )
};

export default Orders;