import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = 'AIzaSyAGnvsBR2n98t2u923hLJb0feaXb8kXxFs';

class SimpleMap extends Component {

    constructor(props) {
        super(props);
        this.state = {lat: this.setState.lat, long: this.setState.long}
    }



    static defaultProps = {
        center: {lat: this.props.lat, lng: this.props.long}
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY}}
                    defaultCenter={this.props.center}
                    defaultZoom={1}
                >
                    <AnyReactComponent
                        lat={this.props.lat}
                        lng={this.props.long}
                        text="theISS"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;