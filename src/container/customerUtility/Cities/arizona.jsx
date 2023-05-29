import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Arizona = (props) => {
    const [ArizonaCity, setArizonaCity] = useState();

    // console.log(props.type)

    useEffect(() => {
        if(!ArizonaCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: ArizonaCity };
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setArizonaCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Ajo, AZ">Ajo, AZ</option>
            <option value="Amado, AZ">Amado, AZ</option>
            <option value="Apache Junction, AZ">Apache Junction, AZ</option>
            <option value="Arizona City, AZ">Arizona City, AZ</option>
            <option value="Ash Fork, AZ">Ash Fork, AZ</option>
            <option value="Avondale, AZ">Avondale, AZ</option>
            <option value="Bagdad, AZ">Bagdad, AZ</option>
            <option value="Benson, AZ">Benson, AZ</option>
            <option value="Bisbee, AZ">Bisbee, AZ</option>
            <option value="Black Canyon City, AZ">Black Canyon City, AZ</option>
            <option value="Bouse, AZ">Bouse, AZ</option>
            <option value="Casa Grande, AZ">Casa Grande, AZ</option>
            <option value="Chandler, AZ">Chandler, AZ</option>
            <option value="Colorado City, AZ">Colorado City, AZ</option>
            <option value="Dennehotso, AZ">Dennehotso, AZ</option>
            <option value="Douglas, AZ">Douglas, AZ</option>
            <option value="Florence, AZ">Florence, AZ</option>
            <option value="Golden Valley, AZ">Golden Valley, AZ</option>
            <option value="Lake Havasu City, AZ">Lake Havasu City, AZ</option>
            <option value="Marana, AZ">Marana, AZ</option>
            <option value="Paradise Valley, AZ">Paradise Valley, AZ</option>
            <option value="Safford, AZ">Safford, AZ</option>
            <option value="Scottsdale, AZ">Scottsdale, AZ</option>
            <option value="Sierra Vista, AZ">Sierra Vista, AZ</option>
            <option value="Tombstone, AZ">Tombstone, AZ</option>
            <option value="Tucson, AZ">Tucson, AZ</option>
            <option value="Willcox, AZ">Willcox, AZ</option>
            <option value="Winslow, AZ">Winslow, AZ</option>
            <option value="Winkelman, AZ">Winkelman, AZ</option>
            <option value="Young, AZ">Young, AZ</option>
            <option value="Youngtown, AZ">Youngtown, AZ</option>
            <option value="Yuma, AZ">Yuma, AZ</option>       
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Arizona);