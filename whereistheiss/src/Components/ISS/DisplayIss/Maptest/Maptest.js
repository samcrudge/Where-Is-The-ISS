import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Maptest.css'

const AnyReactComponent = ({text}) => <div>{text}</div>;
const API_KEY = 'AIzaSyAGnvsBR2n98t2u923hLJb0feaXb8kXxFs';
const icon = '.'

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
            <div className="Gmap" style={{height: '60vh', width: '70%', padding: '0 15% 0'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: API_KEY}}

                    center={this.state.center}
                    defaultZoom={1}
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