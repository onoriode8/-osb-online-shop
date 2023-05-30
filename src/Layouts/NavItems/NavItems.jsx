import classes from "./NavItems.module.css"


export const NavItems = () => (
    <nav className={classes.nav}>
        <ul className={classes.style}>
            <li>Home</li>
            <li>
                <div style={{display: "flex"}}>
                    <div>Cart</div>
                    <div className={classes.cartItem}>3</div>
                </div>
            </li>
            <li>Checkout</li>
        </ul>
    </nav>
);