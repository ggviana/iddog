import React from 'react'
import PropTypes from 'prop-types'
import './CategorySelector.css'

const TYPES = ['husky', 'hound', 'pug', 'labrador']

const CategorySelector = ({ active = 'husky', animate = true, onChange }) => (
  <ul className={`CategorySelector ${animate ? 'animate' : ''}`}>
    {TYPES.map(type => (
      <li
        key={type}
        className={active === type ? 'active' : ''}
        onClick={() => onChange(type)}>
        {type}
      </li>
    ))}
  </ul>
)

CategorySelector.propTypes = {
  onChange: PropTypes.func,
  active: PropTypes.string,
  animate: PropTypes.bool
}

export default CategorySelector
