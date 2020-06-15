import React from "react";
import './GetLocation.css'
import moment from "moment";

class GetLocationPass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messege: 'fail',
            request: {},
            response: []

        };
    }

    getLocation = () => {
        const currentComponent = this
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
            fetch(`http://localhost:1234/Where-Is-The-ISS/whereistheiss/IssPass.php?lat=${position.coords.latitude}&lon=${position.coords.longitude}&alt=${position.coords.altitude}`)
                .then(location => location.json())
                .then((location) => {
                    currentComponent.setState({
                        messege: location.message,
                        request: location.request,
                        response: location.response,
                    })
                    console.log(location);
                })
        });
    }


    render() {

        const Dates = this.state.response.map((n) =>
            <div><p>{moment.unix(n.risetime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p><p>Minutes it will be
                visible: {moment.unix(n.duration).format('mm:ss')}s</p></div>
        )
        return (
            <div>
                <div className="PassISSParent">
                    <div className="PassIss">
                        <div><p>Dates and time's visible.</p>{Dates}</div>
                    </div>
                </div>
                <div className="Location">
                    <button onClick={this.getLocation}>When Will It Pass Me</button>
                </div>
            </div>

        );
    }
}

export default GetLocationPass