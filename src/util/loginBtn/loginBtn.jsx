
const btnStyle = {
    background: "rgba(55, 55, 232, 0.5)", 
    color: "#fff",
    borderRadius: "2em",
    border: "1px solid #fff",
    width: "8em",
    height: "5vh"
}

const loginBtn = ({name, title}) => (
    <button style={btnStyle} type='submit' title={title}>{name}</button>
);

export default loginBtn;