import classes from "../card.module.css";
import { Button } from "../../button/cartButton";


const style = {
    position: "fixed",
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100vh",
    marginTop: "-10em",
    zIndex: 100
}

const errorCard = (props) => {
    let errorDisplay = null;
    if(props.errorDisplay) {
        return errorDisplay = (
            <>
                <div style={style}></div>
                <div className={classes.card}>
                    <main style={{fontFamily: "cursive"}}>Error</main>
                    <hr />
                    <span>
                    <div style={{textAlign: "center", fontFamily: "cursive"}}>{props.error}</div>
                    <Button clicked={props.errorDisplayHandler}>OK</Button>
                    </span>
                </div>
             </> );
    }
    return (
        <div>{errorDisplay}</div>
    );
};

export default errorCard;