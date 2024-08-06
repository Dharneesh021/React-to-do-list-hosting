import React from 'react'

const Header = ({tittle}) => {
  return (
    <header>
    <h1 className="header">{tittle}</h1>
    </header>
  )
}
// Header.defaultProps ={
//   tittle : "List"
// }

export default Header