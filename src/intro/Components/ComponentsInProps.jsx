import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />} />
  );
}`

export default function ComponentsInProps(props) {
  return (
    <Fragment>
      <h1>
        Passing Components in <code>props</code>
      </h1>
      <Row>
        <Col md={4}>
          <p>
            You can also compose components by passing contents in specific{' '}
            <code>props</code>. Components are just objects, so they can be
            passed like any other property.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
