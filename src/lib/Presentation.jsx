import React, { Fragment, Component, Children } from 'react'
import { PropTypes } from 'prop-types'

export default class Presentation extends Component {
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
    updateModules: PropTypes.func,
    updateSlides: PropTypes.func
  }

  static defaultProps = {
    children: [],
    step: 0,
    steps: []
  }

  updateModuleRef(ref, i) {
    if (ref) {
      this.modules[i] = ref

      if (!this.modules.filter(m => m === null).length) {
        this.props.updateModules(this.modules.map(m => m.props.name))
      }
    }
  }

  render() {
    var modules = Children.toArray(this.props.children).map((m, i) =>
      React.cloneElement(m, {
        ref: module => {
          this.updateModuleRef(module, i)
        },
        module: this.props.module,
        slide: this.props.slide,
        updateSlides: this.props.updateSlides
      })
    )

    this.modules = modules.map(m => null)
    return <Fragment>{modules}</Fragment>
  }
}
