import React from 'react'
import { Module, Slide } from '../../lib'
import Intro from './Intro'
import Functions from './Functions'
import Classes from './Classes'
import State from './State'
import StateUpdates from './StateUpdates'
import Events from './Events'
import HandlerScope from './HandlerScope'
import ComponentEventHandlers from './ComponentEventHandlers'
import ConditionalRendering from './ConditionalRendering'
import ComponentVariables from './ComponentVariables'
import ArraysOfComponents from './ArraysOfComponents'
import Forms from './Forms'

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
      <Slide name="State Updates">
        <StateUpdates />
      </Slide>
      <Slide name="Events">
        <Events />
      </Slide>
      <Slide name="Handler Scope">
        <HandlerScope />
      </Slide>
      <Slide name="Component Event Handlers">
        <ComponentEventHandlers />
      </Slide>
      <Slide name="Conditional Rendering">
        <ConditionalRendering />
      </Slide>
      <Slide name="Component Variables">
        <ComponentVariables />
      </Slide>
      <Slide name="Arrays of Components">
        <ArraysOfComponents />
      </Slide>
      <Slide name="Forms">
        <Forms />
      </Slide>
    </Module>
  )
}
