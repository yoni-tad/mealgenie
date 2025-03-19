export default function StepSix(props) {
    return (
      <div className="flex-grow flex flex-col">
        <div className="flex flex-col justify-center items-center gap-2 my-4">
          <p className="text-gray-800 font-bold px-16 text-2xl text-center">
            What's your weight goal?
          </p>
          <p className="text-teal-600 font-semibold px-16 text-md text-center">
            Stay on top of Your Health Goal!
          </p>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="">
            <input
              type="number"
              placeholder="Your weight goal"
              className="w-full border rounded-lg px-4 py-3 border-gray-400"
              name="weightGoal"
              onChange={props.handleChanges}
            />
          </div>
        </div>
      </div>
    );
  }
  