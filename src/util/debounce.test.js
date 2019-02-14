import debounce from './debounce'

describe('debounce', () => {
  it('should call the function in a given time', () => {
    const cb = jest.fn()
    debounce(cb, 0)()

    setTimeout(() => expect(cb).toBeCalled(), 500)
  })
})
