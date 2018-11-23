import React, { Fragment, Component, Children } from 'react'
import { PropTypes } from 'prop-types'

export default class Presentation extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    name: PropTypes.string.isRequired,
    module: PropTypes.number,
    slide: PropTypes.number,
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number),
    updatePresentation: PropTypes.func
  }

  static defaultProps = {
    children: [],
    step: 0,
    steps: []
  }

  constructor(props) {
    super(props)
    this.modules = []
  }

  updateModuleRef(ref, i, arr) {
    this.modules[i] = ref
    this.updatePresentation()
  }

  getModules() {
    return this.modules.filter(m => m).filter(m => m.slidesReady())
  }

  updateSlides() {
    this.updatePresentation()
  }

  updatePresentation() {
    if (this.modulesReady()) {
      this.props.updatePresentation(this)
    }
  }

  modulesReady() {
    return (
      this.getModules().length === Children.toArray(this.props.children).length
    )
  }

  getModuleNames() {
    return this.getModules().map(m => m.props.name)
  }

  getModule() {
    return this.getModules()[this.props.module]
  }

  getSlides() {
    return this.getModule().getSlides()
  }

  getSlideNames() {
    return this.getModule().getSlideNames()
  }

  render() {
    var modules = Children.toArray(this.props.children).map((m, i, modules) =>
      React.cloneElement(m, {
        ref: module => {
          this.updateModuleRef(module, i, modules)
        },
        displayed: this.props.module === i,
        slide: this.props.slide,
        updateSlides: () => this.updateSlides()
      })
    )

    return <Fragment>{modules}</Fragment>
  }
}
