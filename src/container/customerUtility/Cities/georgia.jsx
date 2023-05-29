import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Georgia = (props) => {
    const [GeorgiaCity, setGeorgiaCity] = useState();

    console.log(props.type);

    useEffect(() => {
        if(!GeorgiaCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: GeorgiaCity };
        setTimeout(() => {
            props.location(Location);
        }, 10);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setGeorgiaCity(target);
    };
    
    //changed the options from florida to georgia city below

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Alachua, FL">Alachua, FL</option>
            <option value="Alford, FL">Alford, FL</option>
            <option value="Lake Panasoffkee, FL">Lake Panasoffkee, FL</option>
            <option value="Apollo Beach, FL">Apollo Beach, FL</option>
            <option value="Babson Park, FL">Babson Park, FL</option>
            <option value="Bonifay, FL">Bonifay, FL</option>
            <option value="Campbellton, FL">Campbellton, FL</option>
            <option value="Century, FL">Century, FL</option>
            <option value="Cross City, FL">Crystal River, F</option>
            <option value="Dover, FL">Dover, FL</option>
            <option value="Edgewater, FL">Edgewater, FL</option>
            <option value="Floral City, FL">Floral City, FL</option>
            <option value="Freeport, FL">Freeport, FL</option>
            <option value="Panama City Beach, FL">Panama City Beach, FL</option>
            <option value="Panama City, FL "> Panama City, FL</option>
            <option value="Pensacola, FL ">Pensacola, FL </option>
            <option value="Pomona Park, FL "> Pomona Park, FL</option>
            <option value="Port Saint Joe, FL "> Port Saint Joe, FL</option>
            <option value="Roseland, FL "> Roseland, FL</option>
            <option value="San Antonio, FL "> San Antonio, FL</option>
            <option value="Sebastian, FL"> Sebastian, FL</option>
            <option value="Groveland, FL"> Groveland, FL</option>
            <option value="Seminole, FL"> Seminole, FL</option>
            <option value="Sorrento, FL"> Sorrento, FL</option>
            <option value="Tallahassee, FL"> Tallahassee, FL</option>
            <option value="Tavares, FL"> Tavares, FL</option>
            <option value="Titusville, FL"> Titusville, FL</option>
            <option value="Valparaiso, FL"> Valparaiso, FL</option>
            <option value="Wausau, FL"> Wausau, FL</option>
            <option value="Vernon, FL"> Vernon, FL</option>
            <option value="Umatilla, FL"> Umatilla, FL</option>
            <option value="West Palm Beach, FL"> West Palm Beach, FL</option>
            <option value="White Springs, FL"> White Springs, FL</option>
            <option value="Winter Springs, FL"> Winter Springs, FL</option>
            <option value="Zolfo Springs, FL"> Zolfo Springs, FL</option>        
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Georgia);