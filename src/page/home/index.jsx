import React from "react";

const Home = () => {
  const showInfo = () => alert("有用户点击");
  return (
    <div className="home" onClick={showInfo}>
      欢迎来到我的世界
    </div>
  );
};

export default Home;
