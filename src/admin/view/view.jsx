import { NavLink } from "react-router-dom";

const view = () => {
    return (
        <header style={{margin: "4em 0em"}}>
        <h1>Admin Dashboard</h1>
        <nav>
            <ul>
                <NavLink to="/admin/users"><li>All User </li></NavLink>
                <NavLink to="/admin/orders"><li> Orders </li></NavLink>
                <NavLink to=""><li>Carts</li></NavLink>
                <NavLink to=""><li>to-be-deliver</li></NavLink>
                <li>admin username</li> { /* admin username to be displayed here*/}
            </ul>        
        </nav>
        </header>
    );
};

export default view;