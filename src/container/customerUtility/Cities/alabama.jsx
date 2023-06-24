import { useState, useEffect} from "react";
import { connect } from "react-redux";

const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Alabama = (props) => {
    const [alabamaCity, setAlabamaCity] = useState();

    console.log(props.type)

    useEffect(() => {
        if(!alabamaCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: alabamaCity };
        console.log(Location);
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setAlabamaCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Abbeville, AL">Abbeville, AL</option>
            <option value="Adamsville, AL">Adamsville, AL</option>
            <option value="Addison, AL">Addison, AL</option>
            <option value="Akron, AL">Akron, AL</option>
            <option value="Alabaster, AL">Alabaster, AL</option>
            <option value="Albertville, AL">Albertville, AL</option>
            <option value="Alexander City, AL">Alexander City, AL</option>
            <option value="Alexandria, AL">Alexandria, AL</option>
            <option value="Aliceville, AL">Aliceville, AL</option>
            <option value="Allgood, AL">Allgood, AL</option>
            <option value="Altoona, AL">Altoona, AL</option>
            <option value="Andalusia, AL">Andalusia, AL</option>
            <option value="Anderson, AL">Anderson, AL</option>
            <option value="Anniston, AL">Anniston, AL</option>
            <option value="Arab, AL">Arab, AL</option>
            <option value="Ardmore, AL">Ardmore, AL</option>
            <option value="Ariton, AL">Ariton, AL</option>
            <option value="Arley, AL">Arley, AL</option>
            <option value="Ashford, AL">Ashford, AL</option>
            <option value="Ashland, A">Ashland, AL</option>
            <option value="Ashville, AL">Ashville, AL</option>
            <option value="Athens, AL">Athens, AL</option>
            <option value="Atmore, AL">Atmore, AL</option>
            <option value="Attalla, AL">Attalla, AL</option>
            <option value="Auburn, AL">Auburn, AL</option>
            <option value="Autaugaville, AL">Autaugaville, AL</option>
            <option value="Baileyton, AL">Baileyton, AL</option>
            <option value="Banks, AL">Banks, AL</option>
            <option value="Bay Minette, AL">Bay Minette, AL</option>
            <option value="Bayou La Batre, AL">Bayou La Batre, AL</option>
            <option value="Bear Creek, AL">Bear Creek, AL</option>
            <option value="Beatrice, AL">Beatrice, AL</option>
            <option value="Beaverton, AL">Beaverton, AL</option>
            <option value="Belk, AL">Belk, AL</option>
            <option value="Berry, AL">Berry, AL</option>
            <option value="Bessemer, AL">Bessemer, AL</option>
            <option value="Birmingham, AL">Birmingham, AL</option>
            <option value="Black, AL">Black, AL</option>
            <option value="Blountsville, AL">Blountsville, AL</option>
            <option value="Boaz, AL">Boaz, AL</option>
            <option value="Boligee, AL">Boligee, AL</option>
            <option value="Brantley, AL">Brantley, AL</option>
            <option value="Brent, AL">Brent, AL</option>
            <option value="Valley, AL">Valley, AL</option>
            <option value="Vance, AL">Vance, AL</option>
            <option value="Vernon, AL">Vernon, AL</option>
            <option value="Vina, AL">Vina, AL</option>
            <option value="Vincent, AL">Vincent, AL</option>
            <option value="Vredenburgh, AL">Vredenburgh, AL</option>
            <option value="Wadley, AL">Wadley, AL</option>
            <option value="Walnut Grove, AL">Walnut Grove, AL</option>
            <option value="Warrior, AL">Warrior, AL</option>
            <option value="Waterloo, AL">Waterloo, AL</option>
            <option value="Weaver, AL">Weaver, AL</option>
            <option value="Webb, AL">Webb, AL</option>
            <option value="Wedowee, AL">Wedowee, AL</option>
            <option value="West Blocton, AL">West Blocton, AL</option>
            <option value="Wetumpka, AL">Wetumpka, AL</option>
            <option value="Wilsonville, AL">Wilsonville, AL</option>
            <option value=">Wilton, AL">Wilton, AL</option>
            <option value="Winfield, AL">Winfield, AL</option>
            <option value="Woodville, AL">Woodville, AL</option>
            <option value="York, AL">York, AL</option>
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Alabama);