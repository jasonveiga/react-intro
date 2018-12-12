import React from 'react'
import A from '../../A'

export default function RecommendedSoftware(props) {
  return (
    <React.Fragment>
      <h1>Recommended Software</h1>
      <p>There are several add-ons that can make your life easier.</p>
      <ul>
        <li>
          <A href="https://github.com/timarney/react-app-rewired">
            react-app-rewired
          </A>
          , allows you to control your webpack configuration without completely
          abandoning the React-provided configuration (a process known as
          ejecting). Can also get you hot module reloading.
          <ul>
            <li>
              Run <code>npm i --save-dev react-app-rewired</code>
            </li>
          </ul>
        </li>
        <li>
          <A href="https://prettier.io/">Prettier</A>, an opinionated code
          formatter, integrates with eslint (used by CRA), as well as many
          editors
          <ul>
            <li>
              <A href="https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4">
                Here&apos;s a guide on setting up Prettier/Eslint for use with
                React
              </A>
            </li>
          </ul>
        </li>
        <li>
          Vim users, try some of the following plugins:
          <ul>
            <li>
              <A href="https://github.com/w0rp/ale">
                Asynchronous Lint Engine (ALE)
              </A>
              , which integrates with eslint/prettier out of the box
            </li>
            <li>
              <A href="https://github.com/mxw/vim-jsx">JSX support for Vim</A>
            </li>
          </ul>
        </li>
        <li>
          Atom users should consider:
          <ul>
            <li>
              <A href="https://atom.io/packages/prettier-atom">prettier-atom</A>
            </li>
            <li>
              <A href="https://atom.io/packages/language-babel">
                language-babel
              </A>
              , replaces language-javascript and other JSX plugins
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  )
}
