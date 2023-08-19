function Loading() {
  return (
    <div
      className="loading"
      style={{ margin: "8rem auto", textAlign: "center" }}>
      <img
        src={require("../images/spinner.gif")}
        alt="loading"
        width={250}
        height={250}
      />
      <h3>Loading...</h3>
    </div>
  );
}

export default Loading;
