import "./Loading.less";

const Loading = () => {
  return (
    <div
      className="loading-container"
      style={{
        display: "inline-block",
        width: "200px",
        height: "200px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    </div>
  );
};

export default Loading;
