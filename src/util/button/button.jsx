

const style={
    background: "orange", 
    color: "#fff",
    borderRadius: "2em",
    border: "1px solid #fff",
    width: "12em",
    height: "5vh"
}

const styles={
    // background: "orange", 
    // color: "#fff",
    borderRadius: "2em",
    border: "1px solid grey",
    width: "12em",
    height: "5vh"
}

const button = (props) => (
    <div>
        <button disabled={props.disabled} 
          onClick={props.click} type="submit" 
          style={props.disabled ? styles : style}>{props.children}</button>
    </div>
);

export default button;