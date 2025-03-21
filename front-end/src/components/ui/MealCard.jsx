import { HandPlatter, Flame } from "lucide-react";

export default function MealCard(props) {
  const meal = props.meal
  return (
    <div className="bg-rose-50 py-4 px-8 my-4 rounded-2xl">
      <div className="flex flex-col">
        <div className="flex gap-4 pb-2">
          <HandPlatter size={56} className="text-teal-600" />
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold text-start">{meal.mealName}</p>
            <p className="flex gap-2 font-semibold">
              <Flame className="text-rose-500" /> {meal.calories} Kcal {meal.weight}g
            </p>
          </div>
        </div>

        <div className="bg-rose-300 h-[1px] my-2"></div>

        <div className="flex py-2 justify-around">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">{meal.protein} g</p>
            <p className="text-lg font-semibold">protein</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">{meal.fat} g</p>
            <p className="text-lg font-semibold">fat</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">{meal.carbs} g</p>
            <p className="text-lg font-semibold">Carbs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
