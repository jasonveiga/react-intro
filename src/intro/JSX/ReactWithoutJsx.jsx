import React, { Fragment } from 'react'
import A from '../../A'
import JsxCode from '../../lib/JsxCode'
import { Row, Col } from 'reactstrap'

const snippet1 = `const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);`

const snippet2 = `const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);`

export default function ReactWithoutJsx(props) {
  return (
    <Fragment>
      <h1>React Without JSX</h1>
      <p>
        It&apos;s possible to use React with JSX, although the results will be
        arguably less readable as you compose large components. Simply use{' '}
        <code>createElement</code> from the react package.{' '}
        <strong>
          This is what your JSX code will compile to behind the scenes.
        </strong>
      </p>
      <Row>
        <Col md={5}>
          <p>This:</p>
          <JsxCode code={snippet1} />
        </Col>
        <Col md={5}>
          <p>Becomes this:</p>
          <JsxCode code={snippet2} />
        </Col>
      </Row>
      <p>
        All <code>createElement</code> arguments after the second are the child
        elements, which can be text or other <code>createElement</code> calls.
        See the{' '}
        <A href="https://reactjs.org/docs/react-api.html#createelement">docs</A>{' '}
        for details.
      </p>
    </Fragment>
  )
}
