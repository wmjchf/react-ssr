import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const showInfo = () => alert("有用户点击");
  return (
    <div className="home">
      <div className="tip" onClick={showInfo}>
        欢迎来到我的世界
      </div>
      <div className="btn">
        <Link to="/about">去往成功的彼岸</Link>
      </div>
    </div>
  );
};

export default Home;
