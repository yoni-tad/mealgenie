import { RotateCcw } from "lucide-react";

export default function Header(props) {
  return (
    <div className="flex">
      <div className="flex-grow flex gap-0 justify-center mb-4">
        <p className="text-rose-500 text-3xl font-bold font-pacifico">Meal</p>
        <p className="text-teal-600 text-3xl font-bold font-pacifico">Genie</p>
      </div>
      <RotateCcw onClick={props.clearData} className="text-rose-500"/>
    </div>
  );
}
