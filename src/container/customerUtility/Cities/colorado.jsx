import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Colorado = (props) => {
    const [ColoradoCity, setColoradoCity] = useState();


    useEffect(() => {
        if(!ColoradoCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: ColoradoCity };
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setColoradoCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Akron, CO">Akron, CO</option>
            <option value="Alamosa, CO">Alamosa, CO</option>
            <option value="Allenspark, CO">Allenspark, CO</option>
            <option value="Aurora, CO">Aurora, CO</option>
            <option value="Bennett, CO">Bennett, CO</option>
            <option value="Blanca, CO">Blanca, CO</option>
            <option value="Brighton, CO">Brighton, CO</option>
            <option value="Castle Rock, CO">Castle Rock, CO</option>
            <option value="Central City, CO">Central City, CO</option>
            <option value="Delta, CO">Delta, CO</option>
            <option value="Dove Creek, CO">Dove Creek, CO</option>
            <option value="Edwards, CO">Edwards, CO</option>
            <option value="Englewood, CO">Englewood, CO</option>
            <option value="Grand Junction, CO">Grand Junction, CO</option>
            <option value="Hillrose, CO "> Hillrose, CO</option>
            <option value="Johnstown, CO ">Johnstown, CO </option>
            <option value="Lake City, CO "> Lake City, CO</option>
            <option value="Louisville, CO "> Louisville, CO</option>
            <option value="Manzanola, CO "> Manzanola, CO</option>
            <option value="Monte Vista, CO "> Monte Vista, CO</option>
            <option value="Manassa, CO"> Manassa, CO</option>
            <option value="Naturita, CO"> Naturita, CO</option>
            <option value="New Castle, CO"> New Castle, CO</option>
            <option value="Oak Creek, CO"> Oak Creek, CO</option>
            <option value="Ordway, CO"> Ordway, CO</option>
            <option value="Pagosa Springs, CO"> Pagosa Springs, CO</option>
            <option value="Parachute, CO"> Parachute, CO</option>
            <option value="Red Feather Lakes, CO"> Red Feather Lakes, CO</option>
            <option value="Rockvale, CO"> Rockvale, CO</option>
            <option value="Sugar City, CO"> Sugar City, CO</option>
            <option value="Towaoc, CO"> Towaoc, CO</option>
            <option value="Thornton, CO"> Thornton, CO</option>
            <option value="Wellington, CO"> Wellington, CO</option>
            <option value="Windsor, CO"> Windsor, CO</option>
            <option value="Yuma, CO"> Yuma, CO</option>        
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Colorado);