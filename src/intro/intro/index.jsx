import React from 'react'
import { Module, Slide } from '../../lib'
import Welcome from './Welcome'
import Agenda from './Agenda'
import Prerequisites from './Prerequisites'
import RequiredSoftware from './RequiredSoftware'
import RecommendedSoftware from './RecommendedSoftware'

export default function getModule() {
  return (
    <Module name="Intro">
      <Slide name="Welcome">
        <Welcome />
      </Slide>
      <Slide name="Agenda">
        <Agenda />
      </Slide>
      <Slide name="Prerequisites">
        <Prerequisites />
      </Slide>
      <Slide name="Required Software">
        <RequiredSoftware />
      </Slide>
      <Slide name="Recommended Software">
        <RecommendedSoftware />
      </Slide>
    </Module>
  )
}
