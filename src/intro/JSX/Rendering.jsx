import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `const element = <h1>Hello, world</h1>;`
const snippet2 = `<div id="root"></div>`
const snippet3 = `const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));`

const htmlSnippet1 = '<div></div>'
const htmlSnippet2 = '<p></p>'

export default function Rendering(props) {
  return (
    <Fragment>
      <h1>Rendering Elements</h1>
      <p>
        Elements are the smallest building blocks of React apps. They&apos;re
        analogous to plain DOM elements, like <code>{htmlSnippet1}</code> and{' '}
        <code>{htmlSnippet2}</code>. Don&apos;t confuse them with components,
        which are higer-level building blocks in React.
      </p>
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
