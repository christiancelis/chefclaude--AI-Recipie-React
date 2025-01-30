export default function IngredientList(props) {

    const ll = props.lstIngredient.map((item, index) => {
        return <li key={index}>{item} </li>;
    });

  return (
    <div className="ingredients-container">
      <h1>
        {props.lstIngredient.length > 0
          ? "Ingredients on Hand"
          : "There is no Ingredients yet: Add one"}
      </h1>
      <ul className="listai">{ll}</ul>
      {props.lstIngredient.length > 3 ? (
        <div className="searchRecipie">
          <div>
            <h1>Ready for a recipie?</h1>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <div>
            <button>Get a recipe</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
