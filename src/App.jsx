import { useState} from "react";
import Cabecera from "./components/Cabecera"   
import Formulario from "./components/Formulario"
import IngredientList from "./components/IngredientList";
import HuggingFaceQuery from "./HuggingFaceQuery";
function App() {

  

  const [lingridient, setLista] = useState([])
  
  function add(newIngredient){
    setLista((oldlist)=>[...oldlist, newIngredient])
  }

  return (
    <>
      <Cabecera/>
      <Formulario  addElement = {add} />
      <IngredientList lstIngredient={lingridient}/>
      <HuggingFaceQuery ingredients={lingridient} />
    </>

          )
}

export default App
