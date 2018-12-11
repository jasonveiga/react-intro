import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

const snippet1 = `function MainContent(props) {
  let greeting = props.isLoggedIn ? <UserGreeting /> : <GuestGreeting /> ;
  // Do other stuff...
  return (
    <div>
      {greeting}
      <p>Page content goes here...</p>
    </div>
  )
}`

const snippet2 = `function ItemsList(props) {
  // Don't render the list if there aren't any items
  return props.items.length ? (
    <ul>
      {props.items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  ) : null;
}`

export default function ComponentVariables(props) {
  return (
    <Fragment>
      <h1>Component Variables and Null Values</h1>
      <p>Components can be stored in variables:</p>
      <JsxCode code={snippet1} />
      <p>Rendering a null value is shorthand for rendering nothing</p>
      <JsxCode code={snippet2} />
    </Fragment>
  )
}
