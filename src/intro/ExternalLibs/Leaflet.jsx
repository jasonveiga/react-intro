import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'
import A from '../../A'

const snippet1 = `const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = { lat: 51.505, lng: -0.09, zoom: 13 }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}


ReactDOM.render(<SimpleExample />, document.getElementById('container'))`

export default function Leaflet(props) {
  return (
    <Fragment>
      <h1>Leaflet</h1>
      <Row>
        <Col md={3}>
          <p>
            <i>(Installed separately)</i>
          </p>
          <p>
            Need a map? <A href="https://leafletjs.com/">Leaflet</A> is a
            popular JavaScript framework for maps, and{' '}
            <A href="https://react-leaflet.js.org/">react-leaflet</A> provides
            bindings for React applications.
            <br />
            <code>npm i --save leaflet react-leaflet</code>
          </p>
        </Col>
        <Col md={9}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
