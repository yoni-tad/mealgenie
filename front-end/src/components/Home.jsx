import { Menu, Star, Carrot, ChevronRight, ArrowRight } from "lucide-react";
import MealCard from "./ui/MealCard";
import { useState } from "react";
import AllMealPlans from "./AllMealPlans";
import GenerateRecipe from "./GenerateRecipe";

export default function Home(props) {
  const [route, seRoute] = useState("home");

  let todayMeal;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];

  const mealPlanData = JSON.parse(localStorage.getItem("MealPlan"));
  const mealPlan = mealPlanData["weekPlan"].map((meal) => {
    if (meal.day === day) {
      todayMeal = meal;
    }
  });

  function handleRoute(route) {
    seRoute(route);
  }

  return (
    <div className="flex flex-col px-4">
      <div className="flex justify-between">
        <Menu size={28} />
        <Star size={28} className="text-yellow-400" />
      </div>
      <div className="py-6 text-start">
        <p className="text-3xl font-bold">Hi, Yoni</p>
        <p className="">Exercise is king. Nutrition is queen</p>
      </div>
      {route != "recipe" ? (
        <div
          onClick={() => handleRoute("recipe")}
          className="flex justify-between bg-rose-500 text-white rounded-xl p-6 cursor-pointer"
        >
          <div className="flex gap-2">
            <Carrot />
            <p>Find recipe by ingredients</p>
          </div>
          <ChevronRight />
        </div>
      ) : null}
      <div className="py-6 text-center">
        {route == "seeAll" ? (
          <>
            <div className="flex justify-between">
              <p className="font-semibold">All meal plans</p>
              <p onClick={() => handleRoute("home")} className="flex gap-2 cursor-pointer">
                Today meal plan <ArrowRight />
              </p>
            </div>

            {mealPlanData["weekPlan"] == null
              ? "Try again"
              : mealPlanData["weekPlan"].map((meal, index) => {
                  return (
                    <ul key={index}>
                      <li>
                        {/* <p>{meal.day}</p> */}
                        <AllMealPlans meal={meal} />
                      </li>
                    </ul>
                  );
                })}
          </>
        ) : route == "recipe" ? (
          <>
            <div className="flex justify-between">
              <p className="font-semibold">Generate Recipe</p>
              <p onClick={() => handleRoute("home")} className="flex gap-2 cursor-pointer">
                Today meal plan <ArrowRight />
              </p>
            </div>

            <GenerateRecipe />
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="font-semibold">Today meal plan</p>
              <p onClick={() => handleRoute("seeAll")} className="flex gap-2 cursor-pointer">
                See all <ArrowRight />
              </p>
            </div>

            {todayMeal == null
              ? "Try again"
              : todayMeal.meals.map((meal, index) => {
                  return <MealCard key={index} meal={meal} />;
                })}
          </>
        )}
      </div>
    </div>
  );
}
