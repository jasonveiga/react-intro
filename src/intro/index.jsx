import React from 'react'
import Welcome from './intro/Welcome'
import Agenda from './intro/Agenda'
import Prerequisites from './intro/Prerequisites'
import WhatIsIt from './JSX/WhatIsIt'
import { Player, Presentation, Module, Slide } from '../lib'

export default function IntroPresentation(props) {
  return (
    <Player>
      <Presentation name="Intro to React">
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
        </Module>
        <Module name="JSX">
          <Slide name="WhatIsIt">
            <WhatIsIt />
          </Slide>
        </Module>
      </Presentation>
    </Player>
  )
}
