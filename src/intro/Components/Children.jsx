import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}`

const snippet2 = `function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}`

export default function Children(props) {
  return (
    <Fragment>
      <h1>Component Children</h1>
      <Row>
        <Col md={4}>
          <p>
            When designing components, you don&apos;t always know what they will
            contain. A special prop called <code>children</code> is used to
            represent the children of the component, wherever it&apos;s used.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          In this example, <code>FancyBorder</code> is used in{' '}
          <code>WelcomeDialog</code>, with arbitrary contents.
        </Col>{' '}
        <Col md={6}>
          <JsxCode code={snippet2} />
        </Col>
      </Row>
    </Fragment>
  )
}
