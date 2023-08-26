import fullyCustomizable from "../images/icon-fully-customizable.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import brandRecognition from "../images/icon-brand-recognition.svg";
import InputBar from "./InputBar";

function AdvencedItem() {
  return (
    <div className="adv-details-item">
      <img
        className="adv-img"
        src={detailedRecords}
        alt="icon-detailed-records"
      />
      <div className="adv-featured">
        <h3>Detailed Records</h3>
        <p className="intro">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
    </div>
  );
}

function AdvancedStat() {
  return (
    <div className="adv-stn">
      <InputBar />
      <div className="adv-title">
        <h2>Advanced Statistics </h2>
        <p className="intro adv-intro">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="adv-details">
        <AdvencedItem />
        <div style={{ position: "relative" }}>
          <AdvencedItem />
          <div className="green-stripe" />
        </div>
        <AdvencedItem />
      </div>
    </div>
  );
}

export default AdvancedStat;
