import classes from "./card.module.css";

function card(props) {
    return (
        <div className={classes.card}>
            <span>
                <div style={{textAlign: "center", color: "red"}}>{props.displayProps}</div>
            </span>
            <hr />
            <main>
                {props.children}
            </main>
        </div>
)};

export default card;