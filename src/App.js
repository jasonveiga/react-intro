import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import IntroPresentation from './intro'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <IntroPresentation />
        </Container>
      </div>
    )
  }
}

export default App
