// import IngredientList from "./IngredientList";

function Formulario(props) {
  
  // Agregar un elemento a la lista de ingredientes
  function adding(formData) {
    const newIngredient = formData.get("agregarIngrediente");
    props.addElement(newIngredient);
  }

  return (
    <>
      <div className="content-form">
        <form action={adding} id="addIngredient">
          <input
            aria-label="Add Ingredient"
            placeholder="e.g Oregano"
            type="text"
            name="agregarIngrediente"
            id="agregarIngrediente"
          />
          <button>+ Add Ingredient</button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
