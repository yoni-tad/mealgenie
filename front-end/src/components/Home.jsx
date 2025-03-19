import {
  Menu,
  Star,
  Carrot,
  ChevronRight,
  UtensilsCrossed,
  Flame,
} from "lucide-react";
import MealCard from "./ui/MealCard";

export default function Home() {
  return (
    <div className="flex flex-col px-4">
      <div className="flex justify-between">
        <Menu size={28} />
        <Star size={28} className="text-yellow-400" />
      </div>
      <div className="py-6">
        <p className="text-3xl font-bold">Hi, Yoni</p>
        <p className="">Exercise is king. Nutrition is queen</p>
      </div>
      <div className="flex justify-between bg-rose-500 text-white rounded-xl p-6">
        <div className="flex gap-2">
          <Carrot />
          <p>Find recipe by ingredients</p>
        </div>
        <ChevronRight />
      </div>
      <div className="py-6">
        <div className="flex justify-between">
          <p className="font-semibold">Today meal plan</p>
          <p>See all</p>
        </div>
        
        <MealCard />
        <MealCard />
        <MealCard />

      </div>
    </div>
  );
}
