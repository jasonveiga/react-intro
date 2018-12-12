import React from 'react'
import A from '../../A'

export default function RequiredSoftware(props) {
  return (
    <React.Fragment>
      <h1>Required Software</h1>
      <p>
        In terms of software, there are two main prerequisites to kickstart your
        React app. In order, they are:
      </p>
      <ul>
        <li>
          <A href="https://nodejs.org/">Node.js</A>
        </li>
        <li>
          <A href="https://github.com/facebook/create-react-app">
            create-react-app
          </A>
          <ul>
            <li>
              This can be run with <code>npx create-react-app my-app</code> in
              recent versions of Node.js
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Out of the box, create-react-app (often referred to as simply CRA),
        gives you several npm scripts for running a development server, and the
        necessary webpack configurations to compile JSX to JavaScript for use in
        the browser. CRA helpfully generates a README showing how to launch your
        app.
      </p>
    </React.Fragment>
  )
}
