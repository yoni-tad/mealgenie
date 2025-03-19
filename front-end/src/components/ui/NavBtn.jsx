export default function NavBtn(props) {
  return (
    <button
      onClick={props.handleNav}
      className="w-full px-4 rounded-xl bg-rose-500 text-white py-3 text-xl my-4"
    >
      {props.btnText}
    </button>
  );
}
