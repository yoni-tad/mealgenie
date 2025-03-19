export default function Progress(props) {
  return (
    <div className="flex rounded-xl h-3 my-10">
      <div
        className="bg-rose-500 h-2 rounded-xl"
        style={{ width: `${props.progress}%` }}
      ></div>
      <div
        className="bg-rose-100 h-2 rounded-e-xl"
        style={{ width: `${100 - props.progress}%` }}
      ></div>
    </div>
  );
}
