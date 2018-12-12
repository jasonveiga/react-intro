import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `const element = <h1>Hello, world</h1>;`
const snippet2 = `<div id="root"></div>`
const snippet3 = `const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));`

export default function Rendering(props) {
  return (
    <Fragment>
      <h1>Rendering Elements</h1>
      <Row>
        <Col md={4}>
          <p>An element describes what you want to see on screen:</p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <p>
            Given the following <code>&lt;div&gt;</code> in your HTML file:
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet2} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <p>You can render it to the DOM with:</p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet3} />
        </Col>
      </Row>
      <p>
        React elements are plain objects, and therefore cheap to create. When
        you update them, React compares the updates to the actual DOM and only
        makes changes as needed, which improves performance.
      </p>
    </Fragment>
  )
}
