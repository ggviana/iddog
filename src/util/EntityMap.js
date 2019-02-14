class EntityMap {
  constructor () {
    this._map = new Map()
  }

  get (k) {
    return this._map.get(k)
  }

  set (k, v) {
    this._map.set(k, v)
    return this
  }

  merge (map) {
    map.entries()
      .map(([key, value]) => this.set(key, value))
    return this
  }

  entries () {
    return [ ...this._map.entries() ]
  }

  get values () {
    return this.entries().map(([key, value]) => value)
  }
}

export default EntityMap
