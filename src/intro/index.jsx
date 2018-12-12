import React from 'react'
import introModule from './intro'
import jsxModule from './JSX'
import componentsModule from './Components'
import { Player, Presentation } from '../lib'

export default function IntroPresentation(props) {
  return (
    <Player>
      <Presentation name="Intro to React">
        {introModule()}
        {jsxModule()}
        {componentsModule()}
      </Presentation>
    </Player>
  )
}
