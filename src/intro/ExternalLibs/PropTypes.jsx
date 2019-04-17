import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `import React from 'react'
import PropTypes from 'prop-types'

function Counter({value, onIncrement}) {
  return (
    <div>
      Current value is: {value}
      <button onClick={() => onIncrement()}>Increment</button>
    </div>
  );
}

// This syntax works with function components or class
// components, you can also define propTypes as a static
// class member.
Counter.propTypes = {
  value: PropTypes.string,
  onIncrement: PropTypes.func
}`

export default function PropTypes(props) {
  return (
    <Fragment>
      <h1>Prop Checking</h1>
      <Row>
        <Col md={4}>
          <p>
            <i>(Ships with create-react-app)</i>
          </p>
          <p>
            Originally, the <code>prop-types</code> package was part of React,
            now it&apos;s a separate dependency in npm. It provides a way to
            validate the props that your components are getting, which can help
            with early problem detection (e.g. passing in a string when
            you&apos;re expecting a number).
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
