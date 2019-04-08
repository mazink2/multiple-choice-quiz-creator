import React from 'react';

export function FormDescription(props) {
  // Return empty line if there's nothing in the line string
  if (props.line.length === 0) {
    return (
      <p>&nbsp;</p>
    )
  }

  // Regular expression to check if the first non whitespace character on a line is '-'
  let match = props.line.match(/^\s*(-)/);

  // Return a list item with the initial whitespace removed if the regular expression finds a match
  if (match) {
    let listItem = props.line.replace(match[0], '');
    return (
      <li><span>{listItem}</span></li>
    )
  }

  // Return a normal line
  return (
    <p>{props.line}</p>
  )
}


export default FormDescription