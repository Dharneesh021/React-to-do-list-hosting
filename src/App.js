import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState , useEffect} from "react";
import SearchItem from "./SearchItem";
import ApiRequest from "./ApiRequest";

function App() {
  // API 
  const API_URL = 'http://localhost:3500/items';
  const [fetchError , setFetchError] = useState(null)
  const [isLoading , setIsLoading] = useState(true)

  // Content
  const[items , setItems] = useState([])

    useEffect(()=>{
      const fetchApi = async()=>{
        try{
          const response = await fetch(API_URL)
          if(!response.ok) throw Error ('Data Not Received')
          const listItems = await response.json()
          setItems(listItems);
          setFetchError(null)
        }catch(err){
          setFetchError(err.message)
        }finally{
          setIsLoading(false)
        }
      }
      setTimeout(()=>{(async() => await fetchApi())()}, 1000)
      
    }, [])

            // AddItem
            const [newItem , setNewItem] = useState('')

              const addItem = async(element) =>{
                const itemExists = items.some((elements) => (elements.message).toLowerCase() === (element.toLowerCase()))
                
                const idNum = items.length ? Number(items[items.length - 1].id) + 1 : 1;
                const id = idNum.toString()
                const addItems = {id , checked : false , message:element }
                const listItems = [...items , addItems]
                if(!itemExists ){
                  setItems(listItems)
                  // Create Api
                  const postOption = {
                    method : 'POST',
                    header : {
                      'Content-type' : 'application/json'
                    },
                    body : JSON.stringify(addItems)
                   }
  
                   const result = await ApiRequest(API_URL , postOption)
                   if(result) setFetchError(result)
                 }
                 else{
                  alert("Already Exist")
                 }

                 
              }


    const handleCheck = async(id) =>  {
    const listItems = items.map((elements) => 
    elements.id === id ? {...elements , checked:!elements.checked} : elements)
    setItems(listItems)

    // Delete API
    const reqApi = listItems.filter((element) => element.id === id)
    const updateOption = {
      method : "PATCH",
      header : {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({checked : reqApi[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await ApiRequest(reqUrl ,updateOption)
    if(result) setFetchError(result)

  }

  async function handleDelete(id){
    const listItems = items.filter((elements) => elements.id!==id)
    setItems(listItems)
    const deleteOption = { method : 'DELETE'}
    const reqUrl = `${API_URL}/${id}`
    const result = await ApiRequest(reqUrl , deleteOption)
    if(result) setFetchError(resultx )
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
      <main>
        {fetchError && <p style={{color:"Red"}}>{`Error: ${fetchError}`}</p> }
        {isLoading && <p style={{color:"green"}}>Loading Items...</p> }
          {!fetchError && !isLoading && <Content 
            items = {items.filter(element => ((element.message).toUpperCase()).includes(search.toUpperCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />}
      </main>
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;
