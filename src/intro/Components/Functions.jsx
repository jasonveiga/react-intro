import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`

const snippet2 = `function Welcome({name}) {
  return <h1>Hello, {name}</h1>;
}`

export default function Functions(props) {
  return (
    <Fragment>
      <h1>Function Components</h1>
      <p>
        A function component is passed a single argument, <code>props</code>,
        that contains the props, or attributes that the component was
        instantiated with. It has some advantages, including simplicity and high
        testability, but it can&apos;t have much in the way of local state.
      </p>
      <JsxCode code={snippet1} />
      <p>
        You can take advantage of object destructuring to map your props onto
        local variables, making your code more succinct.
      </p>
      <JsxCode code={snippet2} />
      <p>
        Props are read-only, and when they change, the component is re-rendered.
      </p>
    </Fragment>
  )
}
