export default function getIn (object, path = '', defaultValue = undefined) {
  const result = object == null
    ? undefined
    : path.split('.').reduce((current, key) =>
        key in current ? current[key] : undefined,
      object
    )

  return result === undefined ? defaultValue : result
}
