import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

export default function Events(props) {
  return (
    <Fragment>
      <h1>Events in JSX</h1>
      <p>
        There are a couple of key differences for DOM events in JSX vs HTML.
        Event names are camelCase rather than lower-case in JSX, and handlers
        are JSX expressions rather than strings. Compare the HTML button:
      </p>
      <JsxCode code={`<button onclick="activate">Activate!</button>`} />
      <p>...with the JSX button:</p>
      <JsxCode code={`<button onClick={activate}>Activate!</button>`} />
      <p>
        In the JSX version, <code>activate</code> must refer to a function
        that&apos;s in the scope of the JSX.
      </p>
    </Fragment>
  )
}
