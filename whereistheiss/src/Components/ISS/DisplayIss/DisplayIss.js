import React from "react";
import './DisplayIss.css'
import SimpleMap from "./Map/Map";


class DisplayIss extends React.Component {


    render() {
        return (
            <div className="IssInfo">
                <p><button onClick={this.props.update }> Refresh!</button></p>
                <SimpleMap long={this.props.iss_position.longitude} lat={this.props.iss_position.latitude}/>
            </div>
        )
    }
}

export default DisplayIss