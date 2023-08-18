import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function MappedLink({ originLink, shortLink }) {
  const [copied, setCopied] = useState(false);
  const btnClassName = `copy-btn ${
    copied ? "copied-btn" : " copy-btn green-btn"
  }`;

  return (
    <div className="shorted-link">
      <div className="origin-link-showed">{originLink}</div>
      <div className="short-link-copy-btn">
        <div className="shorten-link-showed">{shortLink}</div>
        <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
          <button className={btnClassName}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default MappedLink;
