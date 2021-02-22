import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { inscrease, decrease } from "../../store/reducer/count/action";

const Home = (props) => {
  const showInfo = () => alert("有用户点击");
  return (
    <div className="home">
      <div className="tip" onClick={showInfo}>
        欢迎来到我的世界
      </div>
      <div className="inscrease" onClick={props.inscrease}>
        +
      </div>
      <div className="count">{props.count}</div>
      <div className="decrease" onClick={props.decrease}>
        -
      </div>
      <div className="btn">
        <Link to="/about">去往成功的彼岸</Link>
      </div>
    </div>
  );
};
const mapStateToProp = (state) => {
  return { count: state.count };
};
const mapActionToProp = {
  inscrease,
  decrease,
};
export default connect(mapStateToProp, mapActionToProp)(Home);
