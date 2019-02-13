import getIn from './getIn'

describe('getIn', () => {
  const data = {
    node: {
      parent: {
        name: 'div'
      }
    }
  }

  it('returns undefined when the value is not found', () => {
    expect(getIn(data, 'node.tag')).toBe(undefined)
  })

  it('returns the defaultValue when the value is not found', () => {
    expect(getIn(data, 'node.tag', 'blockquote')).toBe('blockquote')
  })

  it('return the nested value', () => {
    expect(getIn(data, 'node.parent.name')).toBe('div')
    expect(getIn(data, 'node.parent.name', 'blockquote')).toBe('div')
  })
})
