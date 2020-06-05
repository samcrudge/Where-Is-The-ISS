import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'

const AnyReactComponent = ({text}) => <div><img style={{width: '50px', height: '50px'}} src={text} alt="fuckyou"/></div>;
const API_KEY = 'AIzaSyAGnvsBR2n98t2u923hLJb0feaXb8kXxFs';


class GoogleMaps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.long)
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat) {
            this.setState(
                {
                    center: {
                        lat: parseFloat(this.props.lat),
                        lng: parseFloat(this.props.long)
                    }
                })
        }
    }

    render() {
        return (
            <div className="gmap" style={{height: '60vh', width: '70%', padding: '0 15% 0'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: API_KEY}}

                    center={this.state.center}
                    defaultZoom={1}
                >
                    <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="https://cdn4.iconfinder.com/data/icons/astronomy-and-space-outline-style/512/spase-05-512.png"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMaps;