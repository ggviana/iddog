export default function getCategoryFrom (query = '') {
  const matched = query.match(/category=(husky|hound|pug|labrador)/i)

  if (matched) {
    return matched[1].toLowerCase()
  }
}
