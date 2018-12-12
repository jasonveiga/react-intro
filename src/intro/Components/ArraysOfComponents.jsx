import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet = `const users = [{
  id: 'john@example.com',
  name: 'John Smith'
}, {
  id: 'jane@example.com',
  name: 'Jane Smith'
}]

function PersonList({users}) {
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}`

export default function ArraysOfComponents(props) {
  return (
    <Fragment>
      <h1>Arrays</h1>
      <Row>
        <Col md={4}>
          <p>
            Arrays of components can be rendered, but React requires you to add
            a <code>key</code> attribute to each array element, which enables
            React to know which part of the DOM to update when the array
            changes. Choose a unique string (usually some sort of ID if
            you&apos;re rendering data from a database or API). If you
            don&apos;t provide an ID, React will use a one-up count, but
            that&apos;s not recommended.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet} />
        </Col>
      </Row>
    </Fragment>
  )
}
