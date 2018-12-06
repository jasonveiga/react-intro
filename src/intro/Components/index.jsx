import React from 'react'
import { Module, Slide } from '../../lib'
import Intro from './Intro'
import Functions from './Functions'
import Classes from './Classes'
import State from './State'
import Events from './Events'

export default function getModule() {
  return (
    <Module name="Components">
      <Slide name="Component Basics">
        <Intro />
      </Slide>
      <Slide name="Function Components">
        <Functions />
      </Slide>
      <Slide name="Class Components">
        <Classes />
      </Slide>
      <Slide name="State">
        <State />
      </Slide>
      <Slide name="Events">
        <Events />
      </Slide>
    </Module>
  )
}
