import { useState, useEffect } from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";



const HuggingFaceQuery = ({ ingredients }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
 
  const query = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/google/gemma-2-2b-it",
        {
          headers: {
            Authorization: `Bearer ${null}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await res.json(); 
      setResponse(result);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ingredients.length > 3) {
      query({ inputs: `No repitas la pregunta en la respuesta. Formatea el resultado de manera limpia y estructurada con ingredientes y pasos bien definidos. Genera una receta en español usando los siguientes ingredientes,
: ${ingredients.join(", ")}` });
    }
  }, [ingredients]);

  return (
    <div>
      <h2>Recipe Generator</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && <ClaudeRecipe data={response} />}
    </div>
  );
};

export default HuggingFaceQuery;