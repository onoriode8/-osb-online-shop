
const style={
    background: "orange", 
    color: "#fff",
    borderRadius: "2em",
    border: "1px solid #fff",
    width: "3.2em",
    height: "3vh"
}

const styles={
    // background: "orange", 
    // color: "#fff",
    borderRadius: "2em",
    border: "1px solid grey",
    width: "3.2em",
    height: "3vh"
}

export const Button = (props) => (
    <div>
        <button disabled={props.disabled}
           type="submit" style={ props.disabled ? styles : style }
              >{props.children}</button>
    </div>
);
