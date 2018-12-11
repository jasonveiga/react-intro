import React from 'react'
import { Module, Slide } from '../../lib'
import WhatIsIt from './WhatIsIt'
import WhyUseIt from './WhyUseIt'
import WhyUseIt2 from './WhyUseIt2'
import Expressions from './Expressions'
import ReactWithoutJsx from './ReactWithoutJsx'

export default function getModule() {
  return (
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
      <Slide name="React Without JSX">
        <ReactWithoutJsx />
      </Slide>
    </Module>
  )
}
