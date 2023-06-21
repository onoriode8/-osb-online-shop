import React from "react";
import { Spinner } from "../../util/spinner/spinner";
import { OrdersItems } from "./orderItems/OrdersItems";
import { AxiosInstance } from "../axiosInstance/axiosInstance";

export default class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    };

    componentDidMount() {
        const fetchUserOrder = async() => {
            const response = await AxiosInstance.get("/${}/checkout/payment");
            console.log("data fetched from order Component", response);
            this.setState({orders: response}); //check this setState() function if it works properly.
            // continue working on fetchuserorder component and display orders appropriately...
        };
        fetchUserOrder();
    };

    render () {

        const { orders } = this.state;
        let awaitOrder = <Spinner />;
        if(orders.length !== 0) {   // map through all orders from backend and display.
            return awaitOrder = orders.map((items) => {
                return <OrdersItems key={items._id} />
            })
        };

        return (
            <React.Fragment>
                {awaitOrder}
            </React.Fragment>
        );
    }
}