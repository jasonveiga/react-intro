import React, { Fragment } from 'react'
import Prism from 'prismjs'

const snippet1 = Prism.highlight(
  `render() {
  return (
    <h1>Welcome back, {this.state.name}</h1>
    <button style={{backgroundColor: 'red'}}>Click me!</button>
  )
}`,
  Prism.languages.jsx,
  'jsx'
)

export default function Expressions(props) {
  return (
    <Fragment>
      <h1>Embed JavaScript with your markup</h1>
      <p>
        JavaScript expressions can be embedded with your markup. Expressions are
        delimited by curly braces, <code>{'{}'}</code>.
      </p>
      <pre>
        <code
          className="language-jsx"
          dangerouslySetInnerHTML={{ __html: snippet1 }}
        />
      </pre>
      <p>
        In this example, you can see expressions used to render text, and as
        attributes for an element. Notice that to use an object literal, two
        sets of braces are required (see the <code>style</code> attribute).
      </p>
      <p>
        <strong>Use caution:</strong> expressions are not arbitrary JavaScript
        (e.g. <code>for</code> loops), they have to be something that resolves
        to a value, i.e. something that would be legal on the right side of an
        equals sign.
      </p>
    </Fragment>
  )
}
