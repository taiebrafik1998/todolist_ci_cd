import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandelApi";

function App() {

  const [toDo,setToDo] = useState([])
  const [text,setText]= useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId,setToDoId]= useState("")
  useEffect (()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TO Do APP</h1>
        <div className="top">
          <input 
          type="text"
          placeholder="ⵣ Ajouter une tache ⵣ" 
          value={text}
          onChange={(e)=>setText(e.target.value)}/>

          <div 
          className="add" 
          onClick={
            isUpdating?
            ()=>updateToDo(todoId,text, setToDo, setText, setIsUpdating)
            :
            ()=>addToDo(text,setText,setToDo)}>

          {isUpdating? "ⵣ Update ⵣ": "ⵣ Add ⵣ"}
            
            </div>
        </div>{/**end top */}

        <div className="list">
          {toDo.map((item)=><ToDo 
          key={item._id} 
          text ={item.text}
          updateMode={()=>updateMode(item._id,item.text)}
          deleteToDo={()=>deleteToDo(item._id,setToDo)}
          />)}
          
        </div>
      </div>{/**end container */}
    </div>  
  );
}

export default App;
