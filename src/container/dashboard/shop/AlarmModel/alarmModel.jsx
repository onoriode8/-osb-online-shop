

export const AlarmModel = (props) => {
    let removeItemAlert = null;
    if(props.itemRemoveAlarm) {
        return removeItemAlert = <div style={{background: "red", 
         color: "#fff", fontFamily: "fantasy"}}>item removed from cart</div>
    };
    
    let addItemAlert = null;
    if(props.itemAddAlarm) {
        return addItemAlert = <div style={{background: "green", 
        color: "#fff", fontFamily: "fantasy"}}>item added to cart</div>
    }
    return (
        <div style={{textAlign: "center", position: "relative", zIndex: "20"}}>
            <div>{removeItemAlert}</div>
            <div>{addItemAlert}</div>
        </div>
  );
};
