export default function StepOne() {
  return (
    <div className="flex flex-col gap-10 flex-grow">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <p className="text-gray-800 font-bold px-18 text-2xl text-center">
          Tailor Your Meal Plan to Fit YOU!
        </p>
        <p className="text-teal-600 font-semibold px-18 text-md text-center">
          Make every meal satisfying
        </p>
      </div>
      <div className="flex flex-col justify-between px-6 flex-grow">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-3 border-gray-400"
          />
        </div>
        <button className="rounded-xl bg-rose-500 text-white py-3 text-xl my-4">
          Next
        </button>
      </div>
    </div>
  );
}
