import fullyCustomizable from "../images/icon-fully-customizable.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import brandRecognition from "../images/icon-brand-recognition.svg";
function AdvancedStat() {
  return (
    <div className="adv-stn">
      <div className="adv-title">
        <h2>Advanced Statistics </h2>
        <p className="intro adv-intro">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <hr />
      <div className="adv-details">
        <div>
          <img
            className="adv-img"
            src={brandRecognition}
            alt="icon-brand-recognition"
          />
          <div className="adv-featured">
            <h3>Brand Recognition </h3>
            <p className="intro">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div>
          <img
            className="adv-img"
            src={detailedRecords}
            alt="icon-detailed-records"
          />
          <div className="adv-featured">
            <h3>Detailed Records</h3>
            <p className="intro">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div>
          <img
            className="adv-img"
            src={fullyCustomizable}
            alt="icon-fully-customizable"
          />
          <div className="adv-featured">
            <h3> Fully Customizable</h3>
            <p className="intro">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedStat;
