import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'
import A from '../../A'

const snippet1 = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});`

export default function Jest(props) {
  return (
    <Fragment>
      <h1>Jest</h1>
      <Row>
        <Col md={5}>
          <p>
            <i>(Ships with create-react-app)</i>
          </p>
          <p>
            Testing is an important part of any web application. React&apos;s
            preferred framework is <A href="https://jestjs.io/">Jest</A>, and
            it&apos;s included when you use create-react-app. When you run{' '}
            <code>npm run test</code>, Jest looks for files with names that end
            in <code>.test.js</code>, with a prefix that matches the name of the
            component or module under test.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
