import React, { Fragment } from 'react'
import A from '../../A'

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
          plugins like <A href="https://babeljs.io/">Babel</A> [provided out of
          the box with create-react-app])
        </li>
      </ul>
      <p>Arguments for JSX:</p>
      <ul>
        <li>
          UI code split across fewer files (less separate JS/template code)
        </li>
        <li>
          Compiles to real JavaScript, doesn&apos;t depend on parsing the
          template
        </li>
        <li>
          Fairly well-supported toolchain, esp. when using{' '}
          <code>create-react-app</code>, and widely available editor/IDE plugins
        </li>
        <li>
          Lots of components, plus bindings between React & other packages, e.g.{' '}
          <A href="https://reactstrap.github.io/">reactstrap</A> for{' '}
          <A href="https://getbootstrap.com/">Boostrap</A>
        </li>
      </ul>
    </Fragment>
  )
}
