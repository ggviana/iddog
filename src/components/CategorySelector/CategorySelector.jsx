import React from 'react'
import PropTypes from 'prop-types'
import './CategorySelector.css'

const TYPES = ['husky', 'hound', 'pug', 'labrador']

const CategorySelector = ({ active = 'husky', onChange }) => (
  <ul className='CategorySelector'>
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
  active: PropTypes.string
}

export default CategorySelector
