import classes from "../card.module.css";

const errorCard = (props) => {
    return (
        <div className={classes.card}>
            <span>
                <div style={{textAlign: "center"}}>{props.error}</div>
            </span>
            <hr />
            {/* <main>
                {props.children}
            </main> */}
        </div>
)};

export default errorCard;