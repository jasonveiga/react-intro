import React from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'

export default function JsxCode({ code }) {
  let snippet = Prism.highlight(code, Prism.languages.jsx, 'jsx')

  return (
    <pre>
      <code
        className="language-jsx"
        dangerouslySetInnerHTML={{ __html: snippet }}
      />
    </pre>
  )
}

JsxCode.propTypes = { code: PropTypes.string }
