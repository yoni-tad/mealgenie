export default function StepFour(props) {
  return (
    <div className="flex-grow flex flex-col">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <p className="text-gray-800 font-bold px-14 text-2xl text-center">
          What's your height?
        </p>
        <p className="text-teal-600 font-semibold px-14 text-md text-center">
          Track your daily calories
        </p>
      </div>
      <div className="flex-grow flex flex-col justify-between h-full">
        <div className="">
          <input
            type="number"
            placeholder="Your height"
            name="height"
            className="w-full border rounded-lg px-4 py-3 border-gray-400"
            onChange={props.handleChanges}
          />
          <div className="flex my-4 justify-center">
            <label
              htmlFor="height-cm"
              className="flex justify-between items-center rounded-s-lg px-8 py-1 border border-teal-600 text-gray-800 has-[:checked]:bg-teal-600 has-[:checked]:text-white mb-4"
            >
              <p className="text-center text-lg font-semibold has-[:checked]:text-white">
                cm
              </p>
              <input
                type="radio"
                name="heightMeasurement"
                id="height-cm"
                className="hidden"
                defaultChecked
                value={"cm"}
                onChange={props.handleChanges}
              />
            </label>
            <label
              htmlFor="height-inch"
              className="flex justify-between items-center rounded-e-lg px-8 py-1 border border-teal-600 text-gray-800 has-[:checked]:bg-teal-600 has-[:checked]:text-white mb-4"
            >
              <p className="text-center text-lg font-semibold has-[:checked]:text-white">
                inch
              </p>
              <input
                type="radio"
                name="heightMeasurement"
                id="height-inch"
                className="hidden"
                value={"inch"}
                onChange={props.handleChanges}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
