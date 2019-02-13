const canTraverse = (target, key) => target != null && key in target

export default function getIn (object, path = '', defaultValue = undefined) {
  const result = object == null
    ? undefined
    : path.split('.').reduce((current, key) => canTraverse(current, key) ? current[key] : undefined,
      object
    )

  return result === undefined ? defaultValue : result
}
