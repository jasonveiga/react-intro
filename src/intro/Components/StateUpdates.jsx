import React, { Fragment } from 'react'
import JsxCode from '../../lib/JsxCode'

const snippet = `class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 1 }
  }

  onIncrementClick() {
    this.setState((state, props) => ({
      counter: state.counter + (props.increment || 1)
    }))
  }

  onReset() {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div>
        <div>Value: {this.state.counter}</div>
        <button onClick={this.onIncrementClick.bind(this)}>Increment</button>
        <button onClick={this.onReset.bind(this)}>Reset</button>
      </div>
    )
  }
}`

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 1 }
  }

  onIncrementClick() {
    this.setState((state, props) => ({
      counter: state.counter + (props.increment || 1)
    }))
  }

  onReset() {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div>
        <div>Value: {this.state.counter}</div>
        <button onClick={this.onIncrementClick.bind(this)}>Increment</button>
        <button onClick={this.onReset.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default function StateUpdates(props) {
  return (
    <Fragment>
      <h1>Updating State</h1>
      <p>
        <strong>Never modify state directly</strong>, e.g. with{' '}
        <code>this.state.counter = 0</code>. React won&apos;t know the state was
        updated. Use <code>this.setState</code> instead. <code>setState</code>{' '}
        accepts an object with state updates, but note that state updates are
        asynchronous, so use the second form that accepts an update function if
        your new state depends on previous values. Updates are merged into the
        current state.
      </p>
      <JsxCode code={snippet} />
      <Counter />
    </Fragment>
  )
}
