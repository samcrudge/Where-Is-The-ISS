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
            500000
        )
    }

    GetIssLocationNow = () => {
        fetch('http://api.open-notify.org/iss-now.json')
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
            <div>
                { this.state.iss_position.longitude }
            </div>,
            <DisplayIss messege={ this.state.message } timestamp={ this.state.timestamp } iss_position={ this.state.iss_position } />
        )
    }
}

export default ISS