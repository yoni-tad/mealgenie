import { Goal } from "lucide-react";

export default function StepThree() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <p className="text-gray-800 font-bold px-18 text-2xl text-center">
          WHat's your goal?
        </p>
        <p className="text-teal-600 font-semibold px-18 text-md text-center">
          Stay on Top of Your Health Goals!
        </p>
      </div>
      <div className="flex-grow flex flex-col justify-between px-6 h-full">
        <div className="">
          <label
            htmlFor="goal-one"
            className="flex justify-between items-center rounded-xl p-4 has-[:checked]:border border-teal-600 mb-4"
          >
            <div className="flex items-center gap-2">
              <Goal size={28} className="text-rose-500" />
              <p className="text-lg text-gray-900 font-semibold">Wight loss</p>
            </div>
            <input type="radio" name="goal" id="goal-one" className="hidden" />
          </label>
          <label
            htmlFor="goal-two"
            className="flex justify-between items-center rounded-xl p-4 has-[:checked]:border border-teal-600 mb-4"
          >
            <div className="flex items-center gap-2">
              <Goal size={28} className="text-rose-500" />
              <p className="text-lg text-gray-900 font-semibold">
                Wight maintenance
              </p>
            </div>
            <input type="radio" name="goal" id="goal-two" className="hidden" />
          </label>
          <label
            htmlFor="goal-three"
            className="flex justify-between items-center rounded-xl p-4 has-[:checked]:border border-teal-600 mb-4"
          >
            <div className="flex items-center gap-2">
              <Goal size={28} className="text-rose-500" />
              <p className="text-lg text-gray-900 font-semibold">Wight gain</p>
            </div>
            <input
              type="radio"
              name="goal"
              id="goal-three"
              className="hidden"
            />
          </label>
        </div>
        <button className="rounded-xl bg-rose-500 text-white py-3 text-xl my-4">
          Next
        </button>
      </div>
    </div>
  );
}
