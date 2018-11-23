import React, { Fragment } from 'react'

export default function WhyUseIt2(props) {
  return (
    <Fragment>
      <h1>Why use JSX?</h1>
      <p>Arguments against JSX:</p>
      <ul>
        <li>It&apos;s not JavaScript</li>
        <li>
          It&apos;s not quite HTML either:
          <ul>
            <li>
              Idiosyncracies like <code>className</code> instead of{' '}
              <code>class</code> attribute
            </li>
          </ul>
        </li>
        <li>
          It requires additional tooling to support it (editors, compilation
          toolchains)
        </li>
      </ul>
      <blockquote className="blockquote">
        <p>
          React embraces the fact that rendering logic is inherently coupled
          with other UI logic: how events are handled, how the state changes
          over time, and how the data is prepared for display.
        </p>

        <p>
          Instead of artificially separating technologies by putting markup and
          logic in separate files, React separates concerns with loosely coupled
          units called “components” that contain both. We will come back to
          components in a further section, but if you’re not yet comfortable
          putting markup in JS, this talk might convince you otherwise.
        </p>
      </blockquote>
    </Fragment>
  )
}
