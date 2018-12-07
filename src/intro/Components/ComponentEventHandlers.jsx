import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

const snippet = `function MyComponent({ onLogin, onUsernameChange, username }) {
  return (
    <form>
      <input
        onChange={e => onUsernameChange(e.target.value)}
        value={username}
      />
      <button onClick={onLogin}>Login</button>
    </form>
  )
}`

export default function ComponentEventHandlers(props) {
  return (
    <Fragment>
      <h1>Events In Custom Components</h1>
      <p>
        Events in custom components are typically handled in the same fashion,
        where you pass a function in the props and it&apos;s called by the
        component.
      </p>
      <JsxCode code={snippet} />
    </Fragment>
  )
}
