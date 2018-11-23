import React, { Fragment, Component } from 'react'
import { isSteps } from './Steps'
import { filterChildrenRecursive } from './util'
import { PropTypes } from 'prop-types'

export default class Slide extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    displayed: PropTypes.bool,
    name: PropTypes.string.isRequired,
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number)
  }

  static defaultProps = {
    children: [],
    step: 0,
    steps: []
  }

  length() {
    return 1 + this.numSteps()
  }

  numSteps() {
    var stepsComponents = filterChildrenRecursive(this.props.children, isSteps)

    if (stepsComponents.length) {
      return stepsComponents[0].length()
    } else {
      return 0
    }
  }

  render() {
    return this.props.displayed ? (
      <Fragment>{this.props.children}</Fragment>
    ) : null
  }
}
