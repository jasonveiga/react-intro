import React, { Fragment, Component, Children } from 'react'
import { PropTypes } from 'prop-types'

export function isSteps(c) {
  return typeof c.isSteps === 'function' && c.isSteps()
}

export default class Steps extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number)
  }

  static defaultProps = {
    children: [],
    step: -1,
    steps: []
  }

  // This hacky shit is here because react-hot-loader breaks react component
  // type comparision: https://github.com/gaearon/react-hot-loader/issues/304
  isSteps() {
    return true
  }

  length() {
    return Children.toArray().length
  }

  isVisible(index) {
    return this.props.steps.includes(index) || this.props.step >= index
  }

  render() {
    var autoIndex = 0

    let visible = Children.toArray(this.props.children).filter(child => {
      if (child.props.hasOwnProperty('index')) {
        return this.isVisible(child.props.index)
      } else {
        return this.isVisible(++autoIndex)
      }
    })

    return visible.length ? <Fragment>{visible}</Fragment> : null
  }
}
