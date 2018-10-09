import React, { Fragment } from 'react'

export default function WhatIsIt(props) {
  return (
    <Fragment>
      <h1>What is JSX?</h1>
      <p>From reactjs.org:</p>
      <blockquote className="blockquote">
        <p>Consider this variable declaration:</p>
        <pre>
          <code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code>
        </pre>
        <p>This funny tag syntax is neither a string nor HTML.</p>
        <p>
          It is called JSX, and it is a syntax extension to JavaScript. We
          recommend using it with React to describe what the UI should look
          like. JSX may remind you of a template language, but it comes with the
          full power of JavaScript.
        </p>
      </blockquote>
    </Fragment>
  )
}
