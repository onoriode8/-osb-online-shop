import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Arkansas = (props) => {
    const [ArkansasCity, setArkansasCity] = useState();

    // console.log(props.type)

    useEffect(() => {
        if(!ArkansasCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: ArkansasCity };
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setArkansasCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Alexander, AR">Alexander, AR</option>
            <option value="Alma, AR">Alma, AR</option>
            <option value="Almyra, AR">Almyra, AR</option>
            <option value="Austin, AR">Austin, AR</option>
            <option value="Augusta, AR">Augusta, AR</option>
            <option value="Barling, AR">Barling, AR</option>
            <option value="Bentonville, AR">Bentonville, AR</option>
            <option value="Blytheville, AR">Blytheville, AR</option>
            <option value="Brookland, AR">Brookland, AR</option>
            <option value="Cabot, AR">Cabot, AR</option>
            <option value="Caraway, AR">Caraway, AR</option>
            <option value="Cherry Valley, AR">Cherry Valley, AR</option>
            <option value="Clarksville, AR">Clarksville, AR</option>
            <option value="Damascus, AR">Damascus, AR</option>
            <option value="Decatur, AR">Decatur, AR</option>
            <option value="Diamond City, AR">Diamond City, AR</option>
            <option value="Earle, AR">Earle, AR</option>
            <option value="England, AR">England, AR</option>
            <option value="Fairfield Bay, AR">Fairfield Bay, AR</option>
            <option value="Goshen, AR">Goshen, AR</option>
            <option value="Greenwood, AR">Greenwood, AR</option>
            <option value="Hector, AR">Hector, AR</option>
            <option value="Winslow, AR">Winslow, AR</option>
            <option value="Woodson, AR">Woodson, AR</option>
            <option value="Wrightsville, AR">Wrightsville, AR</option>
            <option value="Warren, AR">Warren, AR</option>
            <option value="Tuckerman, AR">Tuckerman, AR</option>
            <option value="Texarkana, AR">Texarkana, AR</option>
            <option value="Western Grove, AR">Western Grove, AR</option>
            <option value="West Helena, AR">West Helena, AR</option>
            <option value="Wynne, AR">Wynne, AR</option>
            <option value="Yellville, AR">Yellville, AR</option>       
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Arkansas);
