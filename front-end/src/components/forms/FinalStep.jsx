import { CircleCheck } from "lucide-react";

export default function FinalStep() {
  return (
    <div className="flex-grow flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <CircleCheck size={148} className="text-rose-500" />
        <p className="text-gray-800 font-bold px-18 text-2xl text-center py-6">
          You have successfully created a profile
        </p>
        <p className="text-teal-600 font-semibold px-18 text-md text-center">
          Your daily calories rate is
        </p>
        <p className="text-teal-600 text-xl font-bold px-18 text-md text-center">
          2800 Kcal
        </p>
      </div>
      <div className="px-4">
        <button className="w-full  rounded-xl bg-rose-500 text-white py-3 text-xl my-4">
          Get started!
        </button>
      </div>
    </div>
  );
}
