import React, { PureComponent, createContext } from 'react'

const Context = createContext()

export class State extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      data: props.data || {},

      set: data => this.setState({
        data
      })
    }
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const get = fn => (
  <Context.Consumer>
    {fn}
  </Context.Consumer>
)

export const select = selector => fn => (
  <Context.Consumer>
    {state => {
      const select = selector(state)
      return fn(select, state)
    }}
  </Context.Consumer>
)

export default State
