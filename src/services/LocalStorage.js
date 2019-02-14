export default {

  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
    return value
  },

  get (key) {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch (e) {}
  },

  remove (key) {
    window.localStorage.removeItem(key)
  }
}
