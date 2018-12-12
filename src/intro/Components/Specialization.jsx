import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}`

export default function Specialization(props) {
  return (
    <Fragment>
      <h1>Specialization</h1>
      <Row>
        <Col md={4}>
          <p>
            Creating specific versions of components (e.g. with specific{' '}
            <code>props</code> locked down) is called specialization. This,
            along with using <code>props.children</code> and components as
            properties, are forms of composition, which is preferred by React
            over class inheritance.
          </p>
          <p>
            <strong>Note:</strong> inheritance is still absolutely possible in
            React. I&apos;ve used it to create common base classes for
            components that automatically bind certain class methods, and
            perform bookkeeping for debugging purposes.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
