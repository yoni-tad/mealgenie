export default function StepFive(props) {
  return (
    <div className="flex-grow flex flex-col">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <p className="text-gray-800 font-bold px-14 text-2xl text-center">
          What's your weight?
        </p>
        <p className="text-teal-600 font-semibold px-14 text-md text-center">
          Track your daily calories
        </p>
      </div>
      <div className="flex-grow flex flex-col justify-between h-full">
        <div className="">
          <input
            type="number"
            placeholder="Your weight"
            className="w-full border rounded-lg px-4 py-3 border-gray-400"
            name="weight"
            onChange={props.handleChanges}
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
                name="weightMeasurement"
                id="weight-kg"
                className="hidden"
                value={"kg"}
                onChange={props.handleChanges}
                defaultChecked
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
                name="weightMeasurement"
                id="weight-pound"
                className="hidden"
                value={"pound"}
                onChange={props.handleChanges}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
