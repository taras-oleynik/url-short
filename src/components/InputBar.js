import { useState, useEffect, useReducer } from "react";
import backGroundInput from "../images/bg-shorten-desktop.svg";
import MappedLink from "../components/MappedLink";

function InputBar() {
  const [value, setValue] = useState("");
  const [shortLink, setShortLink] = useState(null);
  const [emptyInput, setEmptyInput] = useState(false);
  const [error, setError] = useState(false);
  const [mappedLinks, setLinkMappings] = useState({});

  async function handleClick(originLink) {
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${originLink}`
    );
    const data = await res.json();
    if (!data.result) {
      setEmptyInput(true);
      return setError(true);
    }
    const shortLink = data.result.full_short_link;

    setShortLink(shortLink);
    setLinkMappings({ ...mappedLinks, [originLink]: shortLink });
    setError(false);
    setEmptyInput(false);
  }
  return (
    <div className="input-container">
      <div className="input-bar">
        <div className="input-btn">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Shorten a link here... "
            className={emptyInput ? "emptyInput" : ""}
          />
          <button className="green-btn" onClick={() => handleClick(value)}>
            Shorten It!
          </button>
        </div>
      </div>
      {emptyInput && <p className="empty-input-text">Please add a link</p>}

      {shortLink &&
        Object.entries(mappedLinks).map(([original, shortened]) => (
          <MappedLink
            key={original}
            originLink={original}
            shortLink={shortened}
          />
        ))}
    </div>
  );
}

export default InputBar;
