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
        <Col md={5}>
          <p>
            In HTML, form elements (e.g. <code>&lt;input&gt;</code>) maintain
            their own state. Such elements &quot;just work&quot; in React, too.
          </p>
          <p>
            Frequently though, it&apos;s desirable to maintain a &quot;single
            source of truth&quot; for form values in React (e.g. in the
            component state). Updates are typically recorded using an{' '}
            <code>onChange</code> attribute and a handler to update the
            component state using <code>this.setState</code>. The state value is
            used in the element&apos;s <code>value</code> attribute.
          </p>
          <p>
            Form elements that maintain their own state are typically referred
            to as &quot;unconctrolled&quot;, while &quot;controlled&quot;
            elements have their state maintained by the component.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet} />
        </Col>
      </Row>
    </Fragment>
  )
}
