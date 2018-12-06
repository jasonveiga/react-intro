import React, { Fragment } from 'react'
import A from '../../A'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`

export default function Functions(props) {
  return (
    <Fragment>
      <h1>Class Components</h1>
      <p>
        A class component is useful if you have to manage state, or if you need
        to manage the{' '}
        <A href="https://reactjs.org/docs/state-and-lifecycle.html">
          component lifecycle
        </A>{' '}
        (more on this later).
      </p>
      <JsxCode code={snippet1} />
      <p>
        Props are now located in <code>this.props</code>. The only function
        you&apos;re required to implement is <code>render</code>.
      </p>
    </Fragment>
  )
}
