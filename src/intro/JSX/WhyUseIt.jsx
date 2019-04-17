import React, { Fragment } from 'react'

export default function WhyUseIt(props) {
  return (
    <Fragment>
      <h1>Why use JSX?</h1>
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
        <p>
          React embraces the fact that rendering logic is inherently coupled
          with other UI logic: how events are handled, how the state changes
          over time, and how the data is prepared for display.
        </p>

        <p>
          Instead of artificially separating technologies by putting markup and
          logic in separate files, React separates concerns with loosely coupled
          units called “components” that contain both.
        </p>
      </blockquote>
    </Fragment>
  )
}
