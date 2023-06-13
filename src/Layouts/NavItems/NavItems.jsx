import classes from "./NavItems.module.css"


export const NavItems = props => (
    <nav className={classes.nav}>
        <ul className={classes.style}>
            <li>Home</li>
            <li>
                <div style={{display: "flex"}}>
                    <div>Cart</div>
                    {props.cartItems === 0 ? null : <div className={classes.cartItem}>{props.cartItems}</div>}
                </div>
            </li>
            <li>Checkout</li>
        </ul>
    </nav>
);