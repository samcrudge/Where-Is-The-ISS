import React from "react";
import DisplayIss from "./DisplayIss/DisplayIss";

class ISS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messege: "fail",
            timestamp: 0,
            iss_position: {"latitude": "1", "longitude": "1"},
        }
        this.GetIssLocationNow()
    }

    componentDidMount() {
        this.Timer = setInterval(
            () => this.GetIssLocationNow(),
            60000
        )
    }

    GetIssLocationNow = () => {
        fetch('http://localhost:1234/Where-Is-The-ISS/whereistheiss/IssLocation.php')
            .then(location=>location.json())
            .then((location)=> {
                this.setState( {
                    messege: location.message,
                    timestamp: location.timestamp,
                    iss_position: {"latitude": location.iss_position.latitude, "longitude": location.iss_position.longitude}
                })
                console.log(location);
            })
    }

    render() {
        return (
            <DisplayIss update={ this.GetIssLocationNow } messege={ this.state.message } timestamp={ this.state.timestamp } iss_position={ this.state.iss_position } />
        )
    }
}

export default ISS