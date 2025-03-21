import { CircleCheck } from "lucide-react";
import Confetti from "react-confetti";

export default function FinalStep(props) {
  return (
    <>
      <Confetti />
      <div className="flex-grow flex flex-col justify-center items-center gap-2">
        <CircleCheck size={148} className="text-rose-500" />
        <p className="text-gray-800 font-bold px-14 text-2xl text-center py-6">
          You have successfully created a profile
        </p>
        <p className="text-teal-600 font-semibold px-14 text-md text-center">
          Your daily calories rate is
        </p>
        <p className="text-teal-600 text-xl font-bold px-14 text-md text-center">
          {props.caloryAmount} Kcal
        </p>
      </div>
    </>
  );
}
