import { CircleCheck } from "lucide-react";

export default function AllMealPlans(props) {
  return (
    <div className="bg-rose-50 py-4 px-8 my-4 rounded-2xl text-start">
      <p className="font-bold">{props.meal.day}</p>
      <div className="px-4">
        {props.meal.meals.map((meal, index) => {
          return (
            <div key={index} className="flex justify-between  py-2">
              <p className="flex gap-2 items-center">
                <CircleCheck size={16} /> {meal.mealName}
              </p>
              <p>{meal.calories} calories</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
