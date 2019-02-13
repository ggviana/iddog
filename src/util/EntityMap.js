export default class EntityMap extends Map {
  get values () {
    const entries = [ ...this.entries() ]

    return entries.map(([key, value]) => value)
  }
}
