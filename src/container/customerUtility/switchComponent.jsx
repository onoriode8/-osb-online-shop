import  Alabama  from "./Cities/alabama";
import Alaska from "./Cities/alaska";
import Arizona from "./Cities/arizona";
import Arkansas from "./Cities/arkansas";
import California from "./Cities/california";
import Colorado from "./Cities/colorado";
import * as stateName from "./Cities/citiesActions/cities_name";
import Connecticut from "./Cities/connecticut";
import Delaware from "./Cities/delaware";
import Florida from "./Cities/florida";
import Georgia from "./Cities/georgia";

const switchComponent = props => {
    let city = null;
    switch(props.type) {
        case(stateName.ALABAMA):
            city = <Alabama type={props.type} />
            break;
        case(stateName.ALASKA) :
            city = <Alaska type={props.type} />
            break;
        case(stateName.ARIZONA) :
            city = <Arizona type={props.type} />
            break;
        case (stateName.ARKANSAS):
            city = <Arkansas type={props.type} />
            break;
        case(stateName.CALIFORNIA) :
            city = <California  type={props.type} />
            break;
        case(stateName.COLORADO):
            city = <Colorado type={props.type} />
            break;
        case(stateName.CONNECTICUT):
            city = <Connecticut type={props.type} />
            break;
        case(stateName.DELAWARE) :
            city = <Delaware type={props.type} />
            break;
        case(stateName.FLORIDA): 
            city = <Florida type={props.type} />
            break;
        case(stateName.GEORGIA) :
            city = <Georgia type={props.type} />
            break;
        default:
            return city;
    }

    //add all other state to switch case so user can choose a location and add to chart later

    return (
        <div>
            {city}
        </div>
    );
};

export default switchComponent;

