import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

export default function Intro(props) {
  return (
    <Fragment>
      <h1>Components</h1>
      <p>
        Components are the building blocks of your UI. In JSX, your components
        are identified using the tag in the markup. This example shows JSX that
        renders a component called <code>Welcome</code>
      </p>
      <JsxCode code={`<Welcome name="me" />`} />
      <p>
        Component attributes (<code>name</code> in this example) are passed to
        the component as properties (&quot;props&quot; for short).{' '}
        <strong>Components must always start with a capital letter.</strong>{' '}
        Lower-case tag names are interpreted as DOM tags by React and treated
        specially.
      </p>
    </Fragment>
  )
}
