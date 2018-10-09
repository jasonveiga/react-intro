import { Children } from 'react'

export function filterChildrenRecursive(children, test) {
  var results = []
  children = Children.toArray(children)

  for (let child of children) {
    if (test(child)) {
      results.push(child)
    }
    if (child.props && child.props.children) {
      results = results.concat(
        filterChildrenRecursive(child.props.children, test)
      )
    }
  }

  return results
}

export function hasFunction(obj, fn) {
  return typeof obj[fn] === 'function'
}
