import "./NoItemFound.css";

function NoItemFound() {
  return (
    <div className="no-item-div">
      <div className="no-item">
        <img
          // src="https://elements-cover-images-0.imgix.net/41ce1856-ce64-47eb-9cc9-d50c75ba936b?auto=compress%2Cformat&fit=max&w=900&s=501aef4930c224609ff884797e50331d"
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
