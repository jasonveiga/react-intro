import React from 'react'
import introModule from './intro'
import jsxModule from './JSX'
import externalModule from './ExternalLibs'
import componentsModule from './Components'
import { Player, Presentation } from '../lib'

export default function IntroPresentation(props) {
  return (
    <Player>
      <Presentation name="Intro to React">
        {introModule()}
        {jsxModule()}
        {componentsModule()}
        {externalModule()}
      </Presentation>
    </Player>
  )
}
