import isValidEmail from './isValidEmail'

describe('isValidEmail', () => {
  it('validates correct emails', () => {
    expect(isValidEmail('dog@iddog.br')).toBe(true)
    expect(isValidEmail('someone@somewhere.com')).toBe(true)
  })

  it('invalidates wrong emails', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('someone@')).toBe(false)
    expect(isValidEmail('someone@@')).toBe(false)
    expect(isValidEmail('someone@somewhere')).toBe(false)
    expect(isValidEmail('someonesomewhere.com')).toBe(false)
  })

  it('invalidates non-string values', () => {
    expect(isValidEmail()).toBe(false)
    expect(isValidEmail(null)).toBe(false)
    expect(isValidEmail({})).toBe(false)
  })
})
