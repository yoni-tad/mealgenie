import { Check } from "lucide-react";
import { useRef, useState } from "react";

export default function GenerateRecipe() {
  const [ingredient, setIngredient] = useState([
    { name: "apple" },
    { name: "sugar" },
    { name: "wheat" },
  ]);
  const [recipe, setRecipe] = useState([]);
  const [onLoading, setOnLoading] = useState(false);
  const inputRef = useRef();

  function addIngredients() {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      setIngredient((prevData) => {
        return [...prevData, { name: inputValue }];
      });
    }
    inputRef.current.value = "";
  }

  function spoonacularRequest() {
    setOnLoading(true);

    //  "apple, sugar, wheat";
    const ingredients = ingredient.map((item) => item.name).join(", ");
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=5bdc7596000040ccadcb04b716a04eb6&ingredients=${ingredients}&number=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setOnLoading(false);
      });
  }

  return (
    <div className="py-4">
      <div className="flex my-4">
        <input
          type="text"
          className="flex-grow border-2 border-teal-600 px-4 h-12 rounded-s-full"
          name="ingredient"
          ref={inputRef}
        />
        <button
          onClick={addIngredients}
          className="bg-teal-600 px-4 h-12 text-lg rounded-e-full text-white"
        >
          Add
        </button>
      </div>

      {ingredient.map((item, index) => {
        return (
          <div key={index} className="text-start py-2">
            <p className="flex gap-2">
              <Check /> {item.name}
            </p>
          </div>
        );
      })}

      {ingredient.length <= 2 ? (
        <p className="py-2">Add {3 - ingredient.length} more ingredients</p>
      ) : null}

      {ingredient.length >= 3 ? (
        <div className="py-4">
          <button
            onClick={spoonacularRequest}
            className="bg-teal-500 text-white rounded-xl py-2 w-full"
          >
            Generate recipe
          </button>
        </div>
      ) : null}

      {onLoading ? (
        <div className="flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        recipe.map((item) => {
          return (
            <div key={item.id} className="p-4">
              <img src={item.image} className="rounded-2xl" />
              <p className="text-start py-2 font-bold">{item.title}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
