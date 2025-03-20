export default function NavBtn(props) {
  return (
    <>
      {props.onloading ? (
        <div className="flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <button
          onClick={props.handleNav}
          className="w-full px-4 rounded-xl bg-rose-500 text-white py-3 text-xl my-4 cursor-pointer"
        >
          {props.btnText}
        </button>
      )}
    </>
  );
}
