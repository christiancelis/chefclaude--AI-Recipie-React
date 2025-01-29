import { useState} from "react";

function Formulario() {

  const [lingridient, setLista] = useState([])


  const ll =  lingridient.map((element, index) => {
    return <li key={index}>{element}</li>;
  })

  function ShowContent  (){
    return < div className="searchRecipie">
      <div>
        <h1>Ready for a recipie?</h1>
        <p>Generate a recipe from your list of ingredients</p>
      </div>
      <div>
        <button>
          Get a recipe
        </button>
      </div>
    </div>
  }

  function addElement(formData) {
    const newIngredient = formData.get("agregarIngrediente");
    setLista((oldlist)=>[...oldlist, newIngredient])
    console.log(lingridient);
  }



  return (
    <>
      <div className="content-form">
        <form action={addElement} id="addIngredient">
          <input
            aria-label="Add Ingredient"
            placeholder="e.g Oregano"
            type="text"
            name="agregarIngrediente"
            id="agregarIngrediente"
          />
          <button
          >
            + Add Ingredient
          </button>
        </form>
        <div className="ingredients-container">
        <h1>{lingridient.length>0? "Ingredients on Hand":"There is no Ingredients yet: Add one"}</h1>
        <ul className="listai">
          {ll}
        </ul>
        {lingridient.length>3? <ShowContent/> : null }

        </div>
      
      </div>
    </>
  );
}

export default Formulario;
