

export const UserOutput = (props) => {
    return (
        <div>
            {props.users.length === 1 ? <div><b>Total User </b >{props.users.length} user</div>
             : <div><b>Total User </b >{props.users.length} users</div>}
             <div>name</div>
             <div>{props.user}</div>
        </div>
    );
};
