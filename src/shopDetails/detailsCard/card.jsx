import classes from "./card.module.css";

const detailsCard = props => (
    <header className={classes.card}>
        <main>
            {props.children}
        </main>
    </header>
);

export default detailsCard;