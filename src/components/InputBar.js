import backGroundInput from "../images/bg-shorten-desktop.svg";
function InputBar() {
  return (
    <div className="input-bar">
      <div className="input-btn">
        <input type="text" placeholder="Shorten a link here... " />
        <button>Shorten It!</button>
      </div>
    </div>
  );
}

export default InputBar;
