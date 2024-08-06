import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

function AddItem({handleSubmit , newItem ,setNewItem}) {


    const inputRef = useRef()

  return (
    <form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
            ref = {inputRef}
            id='addItem'
            required
            autoFocus
            placeholder='Add Item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
         />
         <button 
            type='submit'
            onClick={()=> inputRef.current.focus()}
         >
                <FaPlus />
        </button>
    </form>
  )
}

export default AddItem