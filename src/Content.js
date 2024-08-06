import React from "react";
import Items from "./Items";


const Content = ({items , handleCheck , handleDelete}) => {

  
  return (
    <main>
      {items.length ? (
        // ul items
        <Items 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
        ):
        <p style={{color:'red' , marginTop: '2rem'}}>The list is Empty</p>
        }
    </main>
  )
}

export default Content