import React, { Fragment } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism-okaidia.css'

const snippet1 = Prism.highlight(
  `const element = <h1>Hello, world!</h1>;`,
  Prism.languages.jsx,
  'jsx'
)

export default function WhatIsIt(props) {
  return (
    <Fragment>
      <h1>What is JSX?</h1>
      <p>
        From{' '}
        <a
          href="https://reactjs.org/docs/introducing-jsx.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          reactjs.org:
        </a>
      </p>
      <blockquote className="blockquote">
        <p>Consider this variable declaration:</p>
        <pre>
          <code
            className="language-jsx"
            dangerouslySetInnerHTML={{ __html: snippet1 }}
          />
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
