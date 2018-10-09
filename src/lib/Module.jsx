import React, { Fragment, Children, Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Module extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    name: PropTypes.string.isRequired,
    module: PropTypes.string,
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number),
    updateSlides: PropTypes.func
  }

  static defaultProps = {
    children: [],
    step: 0,
    steps: []
  }

  updateSlideRef(slide, i) {
    if (slide) {
      this.slideRefs[i] = slide

      if (this.slideRefs.filter(s => s !== null).length) {
        this.props.updateSlides(this.slideRefs.map(s => s.props.name))
      }
    }
  }

  render() {
    this.slideRefs = Children.toArray(this.props.children).map(() => null)

    var slides = Children.toArray(this.props.children).map((slide, i) =>
      React.cloneElement(slide, {
        ref: s => {
          this.updateSlideRef(s, i)
        },
        slide: this.props.slide
      })
    )

    if (this.props.module !== this.props.name) {
      return null
    } else {
      return <Fragment>{slides}</Fragment>
    }
  }
}
