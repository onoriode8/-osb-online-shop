import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Delaware = (props) => {
    const [DelawareCity, setDelawareCity] = useState();


    useEffect(() => {
        if(!DelawareCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: DelawareCity };
        setTimeout(() => {
            props.location(Location);
        }, 100);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setDelawareCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Bear, DE">Bear, DE</option>
            <option value="Bethany Beach, DE">Bethany Beach, DE</option>
            <option value="Bridgeville, DE">Bridgeville, DE</option>
            <option value="Claymont, DE">Claymont, DE</option>
            <option value="Delaware City, DE">Delaware City, DE</option>
            <option value="Delmar, DE">Delmar, DE</option>
            <option value="Fenwick Island, DE">Fenwick Island, DE</option>
            <option value="Frederica, DE">Frederica, DE</option>
            <option value="Greenwood, DE">Greenwood, DE</option>
            <option value="Kenton, DE">Kenton, DE</option>
            <option value="Millville, DE">Millville, DE</option>
            <option value="Milton, DE">Milton, DE</option>
            <option value="Ocean View, DE">Ocean View, DE</option>
            <option value="Odessa, DE">Odessa, DE</option>
            <option value="Rehoboth Beach, DE "> Rehoboth Beach, DE</option>
            <option value="Seaford, DE ">Seaford, DE </option>
            <option value="Selbyville, DE "> Selbyville, DE</option>
            <option value="Smyrna, DE "> Smyrna, DE</option>
            <option value="Townsend, DE "> Townsend, DE</option>
            <option value="Wilmington, DE "> Wilmington, DE</option>
            <option value="Woodside, DE"> Woodside, DE</option>       
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Delaware);