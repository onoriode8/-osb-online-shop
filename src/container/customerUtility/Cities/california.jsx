import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const California = (props) => {
    const [CaliforniaCity, setCaliforniaCity] = useState();

    console.log(props.type)

    useEffect(() => {
        if(!CaliforniaCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: CaliforniaCity };
        console.log(Location)
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setCaliforniaCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Acton, CA">Acton, CA</option>
            <option value="Adelanto, CA">Adelanto, CA</option>
            <option value="Albany, CA">Albany, CA</option>
            <option value="American Canyon, CA">American Canyon, CA</option>
            <option value="Apple Valley, CA">Apple Valley, CA</option>
            <option value="Bethel Island, CA">Bethel Island, CA</option>
            <option value="Big Bear Lake, CA">Big Bear Lake, CA</option>
            <option value="Brisbane, CA">Brisbane, CA</option>
            <option value="California City, CA">California City, CA</option>
            <option value="Glendale, CA">Glendale, CA</option>
            <option value="Glendora, CA">Glendora, CA</option>
            <option value="Hamilton City, CA">Hamilton City, CA</option>
            <option value="Hermosa Beach, CA">Hermosa Beach, CA</option>
            <option value="Imperial Beach, CA">Imperial Beach, CA</option>
            <option value="Larkspur, CA "> Larkspur, CA</option>
            <option value="Lynwood, CA ">Lynwood, CA </option>
            <option value="Mecca, CA "> Mecca, CA</option>
            <option value="National City, CA "> National City, CA</option>
            <option value="Nevada City, CA "> Nevada City, CA</option>
            <option value="Newman, CA "> Newman, CA</option>
            <option value="Niland, CA "> Niland, CA</option>
            <option value="Oak Park, CA "> Oak Park, CA</option>
            <option value="Ontario, CA "> Ontario, CA</option>
            <option value="Palo Verde, CA "> Palo Verde, CA</option>
            <option value="Placentia, CA "> Placentia, CA</option>
            <option value="Pleasanton, CA "> Pleasanton, CA</option>
            <option value="Rodeo, CA "> Rodeo, CA</option>
            <option value="Rowland Heights, CA"> Rowland Heights, CA</option>
            <option value="Santa Maria, CA"> Santa Maria, CA</option>
            <option value="Simi Valley, CA"> Simi Valley, CA</option>
            <option value="Solana Beach, CA"> Solana Beach, CA</option>
            <option value="Sonoma, CA"> Noatak, AK</option>
            <option value="South San Francisco, CA"> South San Francisco, CA</option>
            <option value="Strawberry, CA">Strawberry, CA</option>
            <option value="Summerland, CA"> Summerland, CA</option>
            <option value="Tahoe Vista, CA"> Tahoe Vista, CA</option>
            <option value="Temple City, CA"> Temple City, CA</option>
            <option value="Trinidad, CA"> Trinidad, CA</option>
            <option value="Union City, CA"> Union City, CA</option>
            <option value="Valley Center, CA"> Valley Center, CA</option>
            <option value="Waterford, CA"> Waterford, CA</option>
            <option value="West Covina, CA"> West Covina, CA</option>
            <option value="Wildomar, CA"> Wildomar, CA</option>
            <option value="Willows, CA"> Willows, CA</option>
            <option value="Windsor, CA"> Windsor, CA</option>
            <option value="Winton, CA"> Winton, CA</option>
            <option value="Woodland, CA"> Woodland, CA</option>
            <option value="Yountville, CA"> Yountville, CA</option>
            <option value="Yucaipa, CA"> Yucaipa, CA</option>
            <option value="Yucca Valley, CA"> Yucca Valley, CA</option>        
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(California);