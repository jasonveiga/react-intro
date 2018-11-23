import React, { Fragment, Children, Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Module extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    name: PropTypes.string.isRequired,
    displayed: PropTypes.bool,
    slide: PropTypes.number,
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number),
    updateSlides: PropTypes.func
  }

  static defaultProps = {
    children: [],
    step: 0,
    steps: []
  }

  constructor(props) {
    super(props)
    this.slides = []
  }

  updateSlideRef(slide, i, arr) {
    this.slides[i] = slide
    this.props.updateSlides(this.getSlides())
  }

  getSlides() {
    return this.slides.filter(s => s !== null)
  }

  slidesReady() {
    return (
      this.getSlides().length === Children.toArray(this.props.children).length
    )
  }

  getSlideNames() {
    return this.getSlides().map(s => s.props.name)
  }

  render() {
    var slides = Children.toArray(this.props.children).map((slide, i, arr) =>
      React.cloneElement(slide, {
        ref: s => {
          this.updateSlideRef(s, i, arr)
        },
        displayed: this.props.displayed && this.props.slide === i,
        slide: this.props.slide
      })
    )

    return <Fragment>{slides}</Fragment>
  }
}
