import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet = `class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`

export default function State(props) {
  return (
    <Fragment>
      <h1>Component State</h1>
      <Row>
        <Col md={4}>
          <p>
            When you need to maintain state in a component, e.g. a ticking
            clock, or a button that toggles something, you keep state in a
            special object, <code>this.state</code>. This state should be
            intialized by extending the <code>React.Component#constructor</code>
            .{' '}
            <strong>
              Don&apos;t forget to call <code>super(props)</code> in your
              constructor!
            </strong>
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet} />
        </Col>
      </Row>
    </Fragment>
  )
}
