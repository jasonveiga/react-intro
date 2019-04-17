import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'
import A from '../../A'

const snippet1 = `import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)`

export default function Redux(props) {
  return (
    <Fragment>
      <h1>Redux</h1>
      <Row>
        <Col md={4}>
          <p>
            <i>(Installed separately)</i>
          </p>
          <p>
            <A href="https://redux.js.org/">Redux</A> is a popular library for
            managing JavaScript application state. It can be used with any UI
            framework, but it has bindings specifically for React. Installing is
            as simple as
            <br /> <code>npm i --save redux react-redux</code>
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
