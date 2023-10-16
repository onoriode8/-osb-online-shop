import { useState, useEffect } from "react";
import { Spinner } from "../../../util/spinner/spinner";
import { UserOutput } from "./usersLists/userOutput";
import ErrorCard from "../../../util/card/errorCard/errorCard";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const getAllUsers = async () => {
            setSpinner(true)
            try {
                const response = await fetch(process.env.REACT_APP_AUTH + "/users");
                if(!response.ok) {
                    throw new Error("Error");
                }
                const responseData = await response.json();
                setSpinner(false)
                setUsers(responseData);
            } catch(err) {
                setSpinner(false)
                setError(err.message);
            }
        };
        getAllUsers();
    }, [])

    let mapUsers = <p>No Users yet!</p>
    if(users.length !== 0) {
        mapUsers = users.map(user => {
            return <UserOutput user={user}/>
        })
    };
    

    return (
        <header>
            {spinner && <Spinner />}
            {error && <ErrorCard error={error} />}
            {mapUsers}
            {/* < */}
        </header>
    );
};

export default Users;