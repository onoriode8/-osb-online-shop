import React from "react";

export const OrdersItems = props => (
    <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        <div>image of order item</div> {/* display all fetch order here that was map from Orders component  */}
        <div>price of image order</div>
        <div>quantity of product</div>
    </div>
);