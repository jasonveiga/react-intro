import React, { Fragment, Children, Component } from 'react'
import { PropTypes } from 'prop-types'

export class Deck extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    name: PropTypes.string.isRequired,
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number)
  }

  static defaultProps = {
    children: [],
    step: 0,
    steps: []
  }

  getModules() {
    return []
  }

  moduleNames() {
    return []
  }

  getSlides() {
    return Children(this.props.children).toArray()
  }

  slideNames() {
    return Children(this.props.children).map(c => c.props.name)
  }

  length() {
    return Children(this.props.children).toArray().length
  }

  render() {
    var slide = Children.toArray(this.props.children).find(
      c => c.name === this.props.slide
    )

    if (slide) {
      return <Fragment>{slide}</Fragment>
    } else {
      console.warn('slide not found:', this.props.slide)
      return <h1>ERROR: Slide {this.props.slide} not found</h1>
    }
  }
}
