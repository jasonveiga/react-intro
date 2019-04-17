import React from 'react'
import { Module, Slide } from '../../lib'
import Intro from './Intro'
import PropTypes from './PropTypes'
import Jest from './Jest'
import Enzyme from './Enzyme'
import Redux from './Redux'
import Bootstrap from './Bootstrap'
import Leaflet from './Leaflet'

export default function getModule() {
  return (
    <Module name="3rd Party Libraries">
      <Slide name="Introduction">
        <Intro />
      </Slide>
      <Slide name="PropTypes">
        <PropTypes />
      </Slide>
      <Slide name="Jest">
        <Jest />
      </Slide>
      <Slide name="Enzyme">
        <Enzyme />
      </Slide>
      <Slide name="Redux">
        <Redux />
      </Slide>
      <Slide name="Bootstrap">
        <Bootstrap />
      </Slide>
      <Slide name="Leaflet">
        <Leaflet />
      </Slide>
    </Module>
  )
}
