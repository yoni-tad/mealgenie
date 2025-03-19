export default function StepOne(props) {
  return (
    <div className="flex flex-col gap-10 flex-grow">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <p className="text-gray-800 font-bold px-14 text-2xl text-center">
          Tailor Your Meal Plan to Fit YOU!
        </p>
        <p className="text-teal-600 font-semibold px-18 text-md text-center">
          Make every meal satisfying
        </p>
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Your name"
          className="w-full border rounded-lg px-4 py-3 border-gray-400"
          name="name"
          onChange={props.handleChanges}
        />
      </div>
    </div>
  );
}
