import { useState, useEffect} from "react";
import { connect } from "react-redux";


const styles = {
    width: "160px", 
    padding: "10px", 
    border: "1px solid grey",
    borderRadius: "1em",
    margin: "2em 0em"
};

 const Alaska = (props) => {
    const [AlaskaCity, setAlaskaCity] = useState();

    console.log(props.type)

    useEffect(() => {
        if(!AlaskaCity) {
           return;
        };
        const Location = { LocationState: props.type, LocationCity: AlaskaCity };
        setTimeout(() => {
            props.location(Location);
        }, 1000);
    })

    const selectCityHandler = (event) => {
        const target = event.target.value
        setAlaskaCity(target);
    };
    

    return (
        <select style={styles} onChange={selectCityHandler}>
            <option value="Select City">Select City</option>
            <option value="Adak, AK">Adak, AK</option>
            <option value="Akiachak, AK">Akiachak, AK</option>
            <option value="Akiak, AK">Akiak, AK</option>
            <option value="Akutan, AK">Akutan, AK</option>
            <option value="Alakanuk, AK">Alakanuk, AK</option>
            <option value="Aleknagik, AK">Aleknagik, AK</option>
            <option value="Ambler, AK">Ambler, AK</option>
            <option value="Anaktuvuk Pass, AK">Anaktuvuk Pass, AK</option>
            <option value="Anchor Point, AK">Anchor Point, AK</option>
            <option value="Anchorage, AK">Anchorage, AK</option>
            <option value="Anderson, AK">Anderson, AK</option>
            <option value="Angoon, AK">Angoon, AK</option>
            <option value="Aniak, AK">Aniak, AK</option>
            <option value="Atqasuk, AK">Atqasuk, AK</option>
            <option value="Barrow, AK">Barrow, AK</option>
            <option value="Bethel, AK">Bethel, AK</option>
            <option value="Big Lake, AK">Big Lake, AK</option>
            <option value="Brevig Mission, AK">Brevig Mission, AK</option>
            <option value="Buckland, AK">Buckland, AK</option>
            <option value="Cantwell, AK">Cantwell, AK</option>
            <option value="Chefornak, AK">Chefornak, AK</option>
            <option value="Chevak, AK">Chevak, AK</option>
            <option value="Cooper Landing, AK">Cooper Landing, AK</option>
            <option value="Copper Center, AK">Copper Center, AK</option>
            <option value="Cordova, AK">Cordova, AK</option>
            <option value="Craig, AK">Craig, AK</option>
            <option value="Delta Junction, AK">Delta Junction, AK</option>
            <option value="Dillingham, AK">Dillingham, AK</option>
            <option value="Eek, AK">Eek, AK</option>
            <option value="Eielson Afb, AK">Eielson Afb, AK</option>
            <option value="Elim, AK">Elim, AK</option>
            <option value="Emmonak, AK">Emmonak, AK</option>
            <option value="Ester, AK">Ester, AK</option>
            <option value="Fairbanks, AK">Fairbanks, AK</option>
            <option value="Fort Yukon, AK">Fort Yukon, AK</option>
            <option value="Gakona, AK">Gakona, AK</option>
            <option value="Galena, AK">Galena, AK</option>
            <option value="Gambell, AK">Gambell, AK</option>
            <option value="Glennallen, AK">Glennallen, AK</option>
            <option value="Goodnews Bay, AK">Goodnews Bay, AK</option>
            <option value="Gustavus, AK">Gustavus, AK</option>
            <option value="Haines, AK">Haines, AK</option>
            <option value="Healy, AK">Healy, AK</option>
            <option value="Holy Cross, AK">Holy Cross, AK</option>
            <option value="Homer, AK">Homer, AK</option>
            <option value="Hoonah, AK">Hoonah, AK</option>
            <option value="Hooper Bay, AK">Hooper Bay, AK</option>
            <option value="Houston, AK">Houston, AK</option>
            <option value="Huslia, AK">Huslia, AK</option>
            <option value="Hydaburg, AK">Hydaburg, AK</option>
            <option value="Juneau, AK">Juneau, AK</option>
            <option value="Kake, AK">Kake, AK</option>
            <option value="Kaktovik, AK">Kaktovik, AK</option>
            <option value="Kaltag, AK">Kaltag, AK</option>
            <option value="Kasigluk, AK">Kasigluk, AK</option>
            <option value="Kasilof, AK">Kasilof, AK</option>
            <option value="Kenai, AK">Kenai, AK</option>
            <option value="Ketchikan, AK">Ketchikan, AK</option>
            <option value="Kiana, AK">Kiana, AK</option>
            <option value=">King Cove, AK">King Cove, AK</option>
            <option value="King Salmon, AK">King Salmon, AK</option>
            <option value="Kipnuk, AK">Woodville, AL</option>
            <option value="Kivalina, AK">Kivalina, AK</option>
            <option value="Klawock, AK ">Klawock, AK</option>
            <option value="Kodiak, AK ">Kodiak, AK </option>
            <option value="Kotlik, AK ">Kotlik, AK </option>
            <option value=" Kotzebue, AK">Kotzebue, AK </option>
            <option value="Koyuk, AK "> Koyuk, AK</option>
            <option value="Kwethluk, AK ">Kwethluk, AK </option>
            <option value="Kwigillingok, AK "> Kwigillingok, AK</option>
            <option value="Lower Kalskag, AK ">Lower Kalskag, AK </option>
            <option value="Manokotak, AK "> Manokotak, AK</option>
            <option value="Marshall, AK "> Marshall, AK</option>
            <option value="Mc Grath, AK "> Mc Grath, AK</option>
            <option value="Mekoryuk, AK "> Mekoryuk, AK</option>
            <option value="Metlakatla, AK "> Metlakatla, AK</option>
            <option value="Minto, AK "> Minto, AK</option>
            <option value="Moose Pass, AK "> Moose Pass, AK</option>
            <option value="Mountain Village, AK "> Mountain Village, AK</option>
            <option value="Naknek, AK "> Naknek, AK</option>
            <option value="Napakiak, AK "> Napakiak, AK</option>
            <option value="Nenana, AK "> Nenana, AK</option>
            <option value="New Stuyahok, AK"> New Stuyahok, AK</option>
            <option value="Nightmute, AK"> Nightmute, AK</option>
            <option value="Nikiski, AK"> Nikiski, AK</option>
            <option value="Ninilchik, AK"> Ninilchik, AK</option>
            <option value="Noatak, AK"> Noatak, AK</option>
            <option value="Nome, AK"> Nome, AK</option>
            <option value="Nondalton, AK">Nondalton, AK</option>
            <option value="Noorvik, AK"> Noorvik, AK</option>
            <option value="North Pole, AK"> North Pole, AK</option>
            <option value="Nuiqsut, AK"> Nuiqsut, AK</option>
            <option value="Nulato, AK"> Nulato, AK</option>
            <option value="Nunapitchuk, AK"> Nunapitchuk, AK</option>
            <option value="Two Rivers, AK"> Two Rivers, AK</option>
            <option value="Unalakleet, AK"> Unalakleet, AK</option>
            <option value="Unalaska, AK"> Unalaska, AK</option>
            <option value="Valdez, AK"> Valdez, AK</option>
            <option value="Venetie, AK"> Venetie, AK</option>
            <option value="Wainwright, AK"> Wainwright, AK</option>
            <option value="Wasilla, AK"> Wasilla, AK</option>
            <option value="White Mountain, AK"> White Mountain, AK</option>
            <option value="Willow, AK"> Willow, AK</option>
            <option value="Wrangell, AK"> Wrangell, AK</option>
            <option value="Yakutat, AK"> Yakutat, AK</option>        
        </select>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        location: (location) => dispatch({ type: "LOCATION", payload: location })
    }
} 

export default connect(null, mapDispatchToProps)(Alaska);