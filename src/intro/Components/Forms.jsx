import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'

const snippet = `class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}`

export default function Forms(props) {
  return (
    <Fragment>
      <h1>Forms</h1>
      <Row>
        <Col md={4}>
          <p>
            In HTML, form elements maintain their own state. In React,
            components maintain the state as a &quot;single source of
            truth&quot;. Updates are typically recorded using an{' '}
            <code>onChange</code> attribute and a handler to update the
            component state using <code>this.setState</code>. The state value is
            used in the element&apos;s <code>value</code> attribute.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet} />
        </Col>
      </Row>
    </Fragment>
  )
}
