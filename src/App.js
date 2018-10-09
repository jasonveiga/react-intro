import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import Welcome from './modules/intro/Welcome'
import { Player, Presentation, Module, Slide } from './lib'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Player>
            <Presentation name="Intro to React">
              <Module name="Intro">
                <Slide name="Welcome">
                  <Welcome />
                </Slide>
              </Module>
            </Presentation>
          </Player>
        </Container>
      </div>
    )
  }
}

export default App
