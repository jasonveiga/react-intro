import React, { Component, Fragment } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons/faForward'
import { faFastForward } from '@fortawesome/free-solid-svg-icons/faFastForward'
// import { faStepBackward } from '@fortawesome/free-solid-svg-icons/faStepBackward'
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward'
import { faFastBackward } from '@fortawesome/free-solid-svg-icons/faFastBackward'
// import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { PropTypes } from 'prop-types'

export default class Player extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    module: PropTypes.string,
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    step: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.number)
  }

  constructor(props) {
    super(props)
    this.presentation = null

    this.state = {
      deck: null,
      moduleIndex: 0,
      slideIndex: 0,
      step: this.props.step || 0,
      steps: this.props.steps || [],
      modules: [],
      slides: [],
      numSteps: 1,
      presentationMode: false,
      presentation: null
    }
  }

  updatePresentation(presentation) {
    let modules = presentation.getModuleNames()
    let slides = presentation.getSlideNames()
    let modulesDifferent = modules.filter((m, i) => m !== this.state.modules[i])
    let slidesDifferent = slides.filter((m, i) => m !== this.state.slides[i])

    if (modulesDifferent.length || slidesDifferent.length) {
      this.setState({ modules, slides })
    }
  }

  gotoModule(moduleIndex) {
    this.setState({
      moduleIndex: moduleIndex,
      module: this.state.modules[moduleIndex],
      slideIndex: 0
    })
  }

  clickPreviousModule(evt) {
    this.gotoModule(this.state.moduleIndex - 1)
    evt.preventDefault()
  }

  clickNextModule(evt) {
    this.gotoModule(this.state.moduleIndex + 1)
    evt.preventDefault()
  }

  gotoSlide(slideIndex) {
    this.setState({
      slideIndex: slideIndex
    })
  }

  clickPreviousSlide(evt) {
    this.gotoSlide(this.state.slideIndex - 1)
    evt.preventDefault()
  }

  clickNextSlide(evt) {
    this.gotoSlide(this.state.slideIndex + 1)
    evt.preventDefault()
  }

  render() {
    var presentation = React.cloneElement(this.props.children, {
      updatePresentation: this.updatePresentation.bind(this),
      module: this.state.moduleIndex,
      slide: this.state.slideIndex
    })

    var moduleNames = this.state.modules.map((m, i) => (
      <DropdownItem key={m} onClick={() => this.gotoModule(i)}>
        {m}
      </DropdownItem>
    ))

    let slideNames = this.state.slides.map((s, i) => (
      <DropdownItem key={s} onClick={() => this.gotoSlide(i)}>
        {s}
      </DropdownItem>
    ))

    let module = this.state.modules[this.state.moduleIndex]
    let slide = this.state.slides[this.state.slideIndex]
    let firstModule = this.state.moduleIndex === 0
    let lastModule = this.state.moduleIndex >= this.state.modules.length - 1
    let firstSlide = this.state.slideIndex === 0
    let lastSlide = this.state.slideIndex >= this.state.slides.length - 1

    // <NavItem>
    //   <NavLink>
    //     <FontAwesomeIcon title="Last step" icon={faStepBackward} />
    //   </NavLink>
    // </NavItem>
    // <NavItem>
    //   <NavLink>
    //     <FontAwesomeIcon title="Advance" icon={faPlay} />
    //   </NavLink>
    // </NavItem>

    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{`${module}: ${slide}`}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={this.clickPreviousModule.bind(this)}
                  disabled={firstModule}
                >
                  <FontAwesomeIcon
                    title="Previous module"
                    icon={faFastBackward}
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.clickPreviousSlide.bind(this)}
                  disabled={firstSlide}
                >
                  <FontAwesomeIcon title="Previous slide" icon={faBackward} />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={this.clickNextSlide.bind(this)}
                  disabled={lastSlide}
                >
                  <FontAwesomeIcon title="Next slide" icon={faForward} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.clickNextModule.bind(this)}
                  disabled={lastModule}
                >
                  <FontAwesomeIcon title="Next module" icon={faFastForward} />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Modules
                </DropdownToggle>
                <DropdownMenu right>{moduleNames}</DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Slides
                </DropdownToggle>
                <DropdownMenu right>{slideNames}</DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {presentation}
      </Fragment>
    )
  }
}
