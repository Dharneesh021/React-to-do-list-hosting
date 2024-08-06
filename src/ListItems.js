import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function ListItems({elements , handleCheck , handleDelete}) {
  return (
    <li className='item'>
            <input
             type="checkBox"
             onChange={()=> handleCheck(elements.id)}
             checked = {elements.checked}
            />
            <label
            style={(elements.checked) ? {color:'red', fontSize:'25px' , textDecoration:'line-through'} : null}
            onDoubleClick={()=> handleCheck(elements.id)}>{elements.message}</label>
            <FaTrashAlt
            type='button'
            tabIndex= '0'
            onClick={()=> handleDelete(elements.id)}
            />
          </li>
  )
}

export default ListItems