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
      firstModule: true,
      lastModule: true,
      firstSlide: true,
      lastSlide: true,
      module: this.props.module || '',
      moduleIndex: 0,
      slide: this.props.slide || '',
      slideIndex: 0,
      step: this.props.step || 0,
      steps: this.props.steps || [],
      modules: [],
      numSteps: 1,
      presentationMode: false,
      presentation: null,
      slides: []
    }
  }

  updateModules(modules) {
    var s = { modules: modules }

    if (!this.state.module) {
      s.module = modules[0]
      s.moduleIndex = 0
      s.firstModule = true
      s.lastModule = modules.length < 2
    }

    if (
      !this.state.module ||
      this.state.modules.length !== modules.length ||
      this.state.modules.filter((m, i) => m !== this.state.modules[i]).length
    ) {
      this.setState(s)
    }
  }

  updateSlides(slides) {
    var s = { slides: slides }

    if (!this.state.slide || !slides.includes(this.state.slide)) {
      s.slide = slides[0]
      s.slideIndex = 0
      s.firstSlide = true
      s.lastSlide = slides.length < 2
    }

    if (
      !this.state.slide ||
      this.state.slides.length !== slides.length ||
      this.state.slides.filter((m, i) => m !== this.state.slides[i]).length
    ) {
      this.setState(s)
    }
  }

  gotoModule(moduleIndex) {
    this.setState({
      moduleIndex: moduleIndex,
      module: this.state.modules[moduleIndex],
      firstModule: moduleIndex === 0,
      lastModule: moduleIndex === this.state.modules.length - 1
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
      slideIndex: slideIndex,
      slide: this.state.slides[slideIndex],
      firstSlide: slideIndex === 0,
      lastSlide: slideIndex === this.state.slides.length - 1
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
      updateModules: this.updateModules.bind(this),
      updateSlides: this.updateSlides.bind(this),
      module: this.state.module,
      slide: this.state.slide
    })

    var moduleNames = this.state.modules.map((m, i) => (
      <DropdownItem key={m} onClick={() => this.gotoModule(i)}>
        {m}
      </DropdownItem>
    ))

    var slideNames = this.state.slides.map((s, i) => (
      <DropdownItem key={s} onClick={() => this.gotoSlide(i)}>
        {s}
      </DropdownItem>
    ))

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
          <NavbarBrand href="/">{`${this.state.module}: ${
            this.state.slide
          }`}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={this.clickPreviousModule.bind(this)}
                  disabled={this.state.firstModule}
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
                  disabled={this.state.firstSlide}
                >
                  <FontAwesomeIcon title="Previous slide" icon={faBackward} />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={this.clickNextSlide.bind(this)}
                  disabled={this.state.lastSlide}
                >
                  <FontAwesomeIcon title="Next slide" icon={faForward} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.clickNextModule.bind(this)}
                  disabled={this.state.lastModule}
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
