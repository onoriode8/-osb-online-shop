import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Connecticut = (props) => {
    const [ConnecticutCity, setConnecticutCity] = useState();


    useEffect(() => {
        if(!ConnecticutCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: ConnecticutCity };
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setConnecticutCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Andover, CT">Andover, CT</option>
            <option value="Ansonia, CT">Ansonia, CT</option>
            <option value="Barkhamsted, CT">Barkhamsted, CT</option>
            <option value="Berlin, CT">Berlin, CT</option>
            <option value="Bethlehem, CT">Bethlehem, CT</option>
            <option value="Bridgewater, CT">Bridgewater, CT</option>
            <option value="Canaan, CT">Canaan, CT</option>
            <option value="Collinsville, CT">Collinsville, CT</option>
            <option value="Columbia, CT">Columbia, CT</option>
            <option value="Danielson, CT">Danielson, CT</option>
            <option value="Deep River, CT">Deep River, CT</option>
            <option value="East Hampton, CT">East Hampton, CT</option>
            <option value="East Lyme, CT">East Lyme, CT</option>
            <option value="Farmington, CT">Farmington, CT</option>
            <option value="Granby, CT "> Granby, CT</option>
            <option value="Greenwich, CT ">Greenwich, CT </option>
            <option value="Hampton, CT "> Hampton, CT</option>
            <option value="Higganum, CT "> Higganum, CT</option>
            <option value="Manchester, CT "> Manchester, CT</option>
            <option value="Middletown, CT "> Middletown, CT</option>
            <option value="New Britain, CT"> New Britain, CT</option>
            <option value="New London, CT"> New London, CT</option>
            <option value="Newtown, CT"> Newtown, CT</option>
            <option value="Oakville, CT"> Oakville, CT</option>
            <option value="Orange, CT"> Orange, CT</option>
            <option value="Oxford, CT"> Oxford, CT</option>
            <option value="Plainville, CT"> Plainville, CT</option>
            <option value="Redding, CT"> Redding, CT</option>
            <option value="Sharon, CT"> Sharon, CT</option>
            <option value="Thomaston, CT"> Thomaston, CT</option>
            <option value="Wethersfield, CT"> Wethersfield, CT</option>
            <option value="Torrington, CT"> Torrington, CT</option>
            <option value="Terryville, CT"> Terryville, CT</option>
            <option value="Winchester Center, CT"> Winchester Center, CT</option>
            <option value="Woodstock, CT"> Woodstock, CT</option>        
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Connecticut);