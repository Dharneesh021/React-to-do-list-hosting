import React from 'react'
import ListItems from './ListItems';

function Items({items , handleCheck , handleDelete}) {
  return (
    <ul>
          {items.map((elements) =>
        //   li items 
            <ListItems 
                elements = {elements}
                key={elements.id}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
          )}
        </ul>
  )
}

export default Items