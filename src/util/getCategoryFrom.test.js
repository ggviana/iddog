import getCategoryFrom from './getCategoryFrom'

describe('getCategoryFrom', () => {
  it('should extract the category from querystring', () => {
    expect(getCategoryFrom('?category=husky')).toBe('husky')
    expect(getCategoryFrom('?category=hound')).toBe('hound')
    expect(getCategoryFrom('?category=pug')).toBe('pug')
    expect(getCategoryFrom('?category=labrador')).toBe('labrador')
  })

  it('should return undefined when the category is not found', () => {
    expect(getCategoryFrom('?category=')).toBe(undefined)
    expect(getCategoryFrom('?husky')).toBe(undefined)
    expect(getCategoryFrom('?')).toBe(undefined)
    expect(getCategoryFrom('')).toBe(undefined)
  })

  it('should return undefined when is the category does not exist', () => {
    expect(getCategoryFrom('?category=chihuahua')).toBe(undefined)
  })

  it('should return a undercased category', () => {
    expect(getCategoryFrom('?category=Labrador')).toBe('labrador')
    expect(getCategoryFrom('?category=LABRADOR')).toBe('labrador')
  })
})
