import React from 'react'
import { geolocated } from "react-geolocated"

import axios from 'axios'

import './GetLocation.css'

 
class GetLocation extends React.Component { 
    state ={
        latitude:"", 
        longitude: "", 
        address: "",
        city: "",
        region: "",

    }   

getAddress =()=>{
axios
.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=M4EunnHSOD0CEYw6r3IXukVR0AOKrpO9&location=${this.props.coords.latitude}%2C${this.props.coords.longitude}&outFormat=json&thumbMaps=false`)
.then(res => this.setState({address:res.data.results[0].locations[0].street, city: res.data.results[0].locations[0].adminArea5, region:res.data.results[0].locations[0].adminArea3} ))
} 

render() {
    console.log(this.props.coords)
    return  !this.props.isGeolocationEnabled ? (
        <div className="getLocation-div3">Geolocation is not enabled yet</div>
        )  : this.props.coords ? (
            <div className="getLocation-div1">
                  <button className="getLocation-locationButton" onClick={this.getAddress}>
                   </button>
               <div className="getLocation-div2">{this.state.address} {this.state.city} {this.state.region}</div>
             </div>
        ) : 
        (
            <div className="getLocation-div3">Getting the location data</div>
        )
}
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 1000,
})(GetLocation);

// export default GetLocation;