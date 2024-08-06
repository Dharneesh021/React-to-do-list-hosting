import React from 'react'

const Footer = ({length}) => {
    // const year = new Date();
  return (
    <footer>{length} List {length > 1 ? ("items") : "item"}</footer>
    // CopyRights &copy; {year.getFullYear()}
  )
}

export default Footer