import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = 'AIzaSyAGnvsBR2n98t2u923hLJb0feaXb8kXxFs';

class SimpleMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.long)
            }
        }
    }

    static defaultProps = {
        center: {lat: 10, lng: 10}
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY}}

                    center={ this.state.center }
                    defaultZoom={5}
                >
                    <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="theISS"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;