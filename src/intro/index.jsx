import React from 'react'
import Welcome from './intro/Welcome'
import Agenda from './intro/Agenda'
import Prerequisites from './intro/Prerequisites'
import WhatIsIt from './JSX/WhatIsIt'
import WhyUseIt from './JSX/WhyUseIt'
import WhyUseIt2 from './JSX/WhyUseIt2'
import Expressions from './JSX/Expressions'
import componentsModule from './Components'
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
          <Slide name="What Is JSX">
            <WhatIsIt />
          </Slide>
          <Slide name="Why Use It">
            <WhyUseIt />
          </Slide>
          <Slide name="Why Use It (cont.)">
            <WhyUseIt2 />
          </Slide>
          <Slide name="Expressions">
            <Expressions />
          </Slide>
        </Module>
        {componentsModule()}
      </Presentation>
    </Player>
  )
}
