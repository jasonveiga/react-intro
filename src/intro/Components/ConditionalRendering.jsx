import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

const snippet = `function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function Greeting2(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting /> ;
}`

export default function ConditionalRendering(props) {
  return (
    <Fragment>
      <h1>Conditional Rendering</h1>
      <p>
        It&apos;s easy enough to choose which compoments to render using an if
        statement or ternary operator:
      </p>
      <JsxCode code={snippet} />
    </Fragment>
  )
}
