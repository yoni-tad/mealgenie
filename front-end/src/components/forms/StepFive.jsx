export default function StepFive() {
    return (
      <div className="flex-grow flex flex-col">
        <div className="flex flex-col justify-center items-center gap-2 my-4">
          <p className="text-gray-800 font-bold px-18 text-2xl text-center">
            What's your weight?
          </p>
          <p className="text-teal-600 font-semibold px-18 text-md text-center">
            Track your daily calories
          </p>
        </div>
        <div className="flex-grow flex flex-col justify-between px-6 h-full">
          <div className="">
            <input
              type="number"
              placeholder="Your weight"
              className="w-full border rounded-lg px-4 py-3 border-gray-400"
            />
            <div className="flex my-4 justify-center">
              <label
                htmlFor="weight-kg"
                className="flex justify-between items-center rounded-s-lg px-8 py-1 border border-teal-600 text-gray-800 has-[:checked]:bg-teal-600 has-[:checked]:text-white mb-4"
              >
                <p className="text-center text-lg font-semibold has-[:checked]:text-white">
                  Kg
                </p>
                <input
                  type="radio"
                  name="weight"
                  id="weight-kg"
                  className="hidden"
                />
              </label>
              <label
                htmlFor="weight-pound"
                className="flex justify-between items-center rounded-e-lg px-8 py-1 border border-teal-600 text-gray-800 has-[:checked]:bg-teal-600 has-[:checked]:text-white mb-4"
              >
                <p className="text-center text-lg font-semibold has-[:checked]:text-white">
                  Pound
                </p>
                <input
                  type="radio"
                  name="weight"
                  id="weight-pound"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <button className="rounded-xl bg-rose-500 text-white py-3 text-xl my-4">
            Next
          </button>
        </div>
      </div>
    );
  }
  