import React from 'react'
import { mount } from 'enzyme'
import { State, get, select } from './State'

describe('State', () => {
  it('mounts without errors', () => {
    const data = {
      title: 'Cat'
    }

    mount(
      <State data={data}>
        {get(state => (
          <p>
            {state.data.title}
          </p>
        ))}
      </State>
    )
  })

  it('should change the internal state', () => {
    const data = {
      title: 'Cat'
    }

    const wrapper = mount(
      <State data={data}>
        {get(state => (
          <p onClick={() => state.set({ title: 'Dog' })}>
            {state.data.title}
          </p>
        ))}
      </State>
    )

    wrapper.find('p').simulate('click')
    expect(wrapper.find('p').text()).toBe('Dog')
  })

  it('should be able to select nested state', () => {
    const data = {
      user: {
        name: 'Kelvin'
      }
    }

    const getUserName = select(state => state.data.user.name)

    const wrapper = mount(
      <State data={data}>
        {getUserName(name => (
          <p>
            {name}
          </p>
        ))}
      </State>
    )

    expect(wrapper.find('p').text()).toBe(data.user.name)
  })

  it('should be able to map the internal state', () => {
    const data = {
      orders: [
        {
          price: 10
        },
        {
          price: 20
        }
      ]
    }

    const getTotal = select(state =>
      state.data.orders.reduce((total, order) => total + order.price, 0)
    )

    const wrapper = mount(
      <State data={data}>
        {getTotal(total => (
          <p>
            {total}
          </p>
        ))}
      </State>
    )

    expect(wrapper.find('p').text()).toBe('30')
  })

  it('should update the nested state', () => {
    const data = {
      user: {
        name: 'Kelvin'
      }
    }

    const newName = 'Harry'

    const getUserName = select(state => state.data.user.name)

    const wrapper = mount(
      <State data={data}>
        {getUserName((name, state) => (
          <p onClick={() => state.set({ user: { name: newName } })}>
            {name}
          </p>
        ))}
      </State>
    )

    expect(wrapper.find('p').text()).toBe(data.user.name)
    wrapper.find('p').simulate('click')
    expect(wrapper.find('p').text()).toBe(newName)
  })
})
