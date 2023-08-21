import "./NoItemFound.css";

function NoItemFound() {
  return (
    <div className="no-item-div">
      <div className="no-item">
        <img
          src={require("../images/No-item-found.avif")}
          alt="no Item found"
          width={400}
          height={400}
        />
      </div>
      <h3>No Item Found</h3>
    </div>
  );
}

export default NoItemFound;
