import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { inscrease, decrease } from "../../store/reducer/count/action";
import { getTodo } from "../../store/reducer/todos/action";
import { todos } from "../../store/reducer/todos";

const Home = (props) => {
  const showInfo = () => alert("有用户点击");

  useEffect(() => { 
    todos.length>0&&props.getTodo();
  })
  
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
      <ul className="todos">
        {
          props.todos.map((todo) => { 
            return <li key={todo}>{ todo }</li>
          })
        }
      </ul>
    </div>
  );
};
Home.loadData = (store) => { 
  return store.dispatch(getTodo())
}
const mapStateToProp = (state) => {
  return { count: state.count,todos:state.todos };
};
const mapActionToProp = {
  inscrease,
  decrease,
  getTodo
};
export default connect(mapStateToProp, mapActionToProp)(Home);
