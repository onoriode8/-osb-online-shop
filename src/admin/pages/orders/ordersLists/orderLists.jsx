

const orderLists = props => (
    <div>
        <div>{props}</div>
        {props.order.length === 1 ? <div><b>{props.order.length} order</b></div> 
        : <div><b>{props.order.length} orders</b></div> }
    </div>
);

export default orderLists;