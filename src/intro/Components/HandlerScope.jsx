import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `class Clicker extends React.Component {
  onClick(e) {
    console.log("Clicker was clicked", e, this.state.clickCnt)
    this.setState(s => ({clickCnt: s.clickCnt + 1})
  }

  render() {
    return <button onClick={this.onClick}>Click me!</button>
  }
}`

const snippet2 = `  render() {
    return <button onClick={this.onClick.bind(this)}>Click me!</button>
  }`

const snippet3 = `  render() {
    return <button onClick={e => this.onClick(e)}>Click me!</button>
  }`

const snippet4 = `  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }`

export default function HandlerScope(props) {
  return (
    <Fragment>
      <h1>Event Handlers and Scope</h1>
      <p>
        One important gotcha about async event handlers is that they&apos;re not
        called in the same scope as <code>this</code>. This is a limitation of
        JavaScript, not JSX. As a result, this first implementation will fail,
        because <code>this</code> will be undefined when <code>onClick</code> is
        called, and the call to <code>this.setState</code> won&apos;t work.
      </p>
      <JsxCode code={snippet1} />
      <p>You can fix this by binding the function:</p>
      <JsxCode code={snippet2} />
      <p>Or you can bind in the constructor:</p>
      <JsxCode code={snippet4} />
      <p>
        Or by using an arrow function as your handler, since arrow functions
        retain <code>this</code> in the scope.
      </p>
      <JsxCode code={snippet3} />
    </Fragment>
  )
}
