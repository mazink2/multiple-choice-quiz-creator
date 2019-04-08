import React from 'react'

export function Option(props) {
  return (
    <label class="option-container">
      <input
        type="checkbox"
        name={`option-${props.index + 1}`}
      />
      <span class="checkmark"></span>
      <span class="option-content"><span>{props.option}</span></span>
    </label>
  )
}

export default Option;