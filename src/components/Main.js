import workTable from "../images/illustration-working.svg";
function Main() {
  return (
    <div className="main">
      <div className="main-text">
        <h1>More than just shorter links</h1>
        <p className="main-moto">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="btn-start-container">
          <button className="get-start-btn">Get Started</button>
        </div>
      </div>
      <img
        className="work-tabl-img"
        src={workTable}
        alt="Illustration working"
      />
    </div>
  );
}

export default Main;
