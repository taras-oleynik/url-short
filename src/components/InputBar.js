import { useState, useEffect, useReducer } from "react";
import backGroundInput from "../images/bg-shorten-desktop.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

function reducer(state, { originLink, shortLink }) {
  return { ...state, [originLink]: shortLink };
}

function InputBar() {
  const [originLink, setOriginLink] = useState("");
  const [sortLink, setShortLink] = useState(null);
  const [copied, setCopied] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const [linkMappings, setLinkMappings] = useState({});

  const [state, dispatch] = useReducer(reducer, {});
  async function handleClick() {
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${originLink}`
    );
    const data = await res.json();
    const shortLink = data.result.full_short_link;
    dispatch({ originLink, shortLink });
  }
  console.log("state:", state);

  const btnClassName = copied ? "copied-btn" : "copy-btn";

  function handleCopy() {
    setCopied(true);
  }

  function handleInputChange({ target: { value } }) {
    setOriginLink(value);
  }
  const fetchShrtLink = () => {
    if (originLink) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${originLink}`)
        .then((res) => res.json())
        .then((data) => setShortLink(data.result.full_short_link));
      // .catch((error) => console.error("Error fetching advice:", error));
    } else {
      setEmptyInput(true); // Set error state
    }
  };

  useEffect(() => {
    fetchShrtLink();
    setEmptyInput(false);
  }, []);

  return (
    <div className="input-container">
      <div className="input-bar">
        <div className="input-btn">
          <input
            type="text"
            value={originLink}
            onChange={handleInputChange}
            placeholder="Shorten a link here... "
            className={emptyInput ? "emptyInput" : ""}
          />
          <button onClick={handleClick}>Shorten It!</button>
        </div>
      </div>
      {sortLink && (
        <div className="shorted-link">
          <div className="origin-link-showed">{originLink}</div>
          <div className="shorten-link-showed">{sortLink}</div>
          <CopyToClipboard text={sortLink} onCopy={handleCopy}>
            <button className={btnClassName}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
      {emptyInput && <p className="empty-input-text">Please add a link</p>}
    </div>
  );
}

export default InputBar;
