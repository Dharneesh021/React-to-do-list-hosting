import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState , useEffect} from "react";
import SearchItem from "./SearchItem";

function App() {

  // Content
  const[items , setItems] = useState([])

    useEffect(()=>{
      const savedItems = JSON.parse(localStorage.getItem("to-do-list"))
      setItems(savedItems)
    }, [])

            // AddItem
            const [newItem , setNewItem] = useState('')

              const addItem = (element) =>{
                const itemExists = items.some((elements) => (elements.message).toLowerCase() === (element.toLowerCase()))
                
                const id = items.length ? items[items.length -1].id + 1 : 1 ;
                const addItems = {id , checked : false , message:element }
                const listItems = [...items , addItems]
                if(!itemExists ){
                  setItems(listItems)
                  localStorage.setItem("to-do-list" , JSON.stringify(listItems))
                 }
                 else{
                  alert("Already Exist")
                 }
              }


  function handleCheck(id) {
    const listItems = items.map((elements) => 
    elements.id === id ? {...elements , checked:!elements.checked} : elements)
    setItems(listItems)
    localStorage.setItem("to-do-list" , JSON.stringify(listItems))
  }

  function handleDelete(id){
    const listItems = items.filter((elements) => elements.id!==id)
    setItems(listItems)
    localStorage.setItem("to-do-list" , JSON.stringify(listItems))
  }

                // AddItem
                function handleSubmit(e){
                  e.preventDefault();
                  if(!newItem) return;
                  addItem(newItem)
                  setNewItem('')
              }

          // Search
          const [search , setSearch] = useState('')

  return (
    <div className="App">
      <Header tittle='To-do-list'/>
      <AddItem 
        newItem = {newItem}
        setNewItem={setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items = {items.filter(element => ((element.message).toUpperCase()).includes(search.toUpperCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;
