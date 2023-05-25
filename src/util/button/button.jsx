
const style={
    background: "orange", 
    color: "#fff",
    borderRadius: "2em",
    border: "1px solid #fff",
    width: "12em",
    height: "5vh"
}

const button = (props) => (
    <div>
        <button type="submit" style={style}>{props.children}</button>
    </div>
);

export default button;