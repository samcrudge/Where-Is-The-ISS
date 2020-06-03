import React from "react";
import './DisplayIss.css'
import SimpleMap from "./Maptest/Maptest";


class DisplayIss extends React.Component {


    render() {
        return (
            <div className="IssInfo">
                <h1>The International Space Station</h1>
                <p> Refresh: <button onClick={this.props.update }> Refresh!</button></p>
                <p> Timestamp: {this.props.timestamp}</p>
                <p> Longitude: {this.props.iss_position.longitude}</p>
                <p> Latitude: {this.props.iss_position.latitude}</p>
                <SimpleMap long={this.props.iss_position.longitude} lat={this.props.iss_position.latitude}/>
            </div>
        )
    }
}

export default DisplayIss