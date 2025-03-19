import Picker from "react-mobile-picker";

export default function StepTwo(props) {
  const ageOptions = Array.from({ length: 91 }, (_, i) => (i + 10).toString());

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col justify-center items-center gap-2 my-4">
        <p className="text-gray-800 font-bold px-18 text-2xl text-center">
          How old are you?
        </p>
        <p className="text-teal-600 font-semibold px-18 text-md text-center">
          Track your daily calories
        </p>
      </div>
      <div className="flex-grow flex flex-col justify-between items-center px-6 h-full">
        <div className="flex items-center gap-2">
          <Picker
            value={{ age: props.selectedAge }}
            onChange={(value) => props.setSelectedAge(value.age)}
          >
            <Picker.Column name="age">
              {ageOptions.map((age) => (
                <Picker.Item key={age} value={age}>
                  {age}
                </Picker.Item>
              ))}
            </Picker.Column>
          </Picker>
          <p>years</p>
        </div>
        <button className="w-full rounded-xl bg-rose-500 text-white py-3 text-xl my-4">
          Next
        </button>
      </div>
    </div>
  );
}
