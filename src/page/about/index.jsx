import React from "react";

const About = () => {
  return <div className="about">既然改变不了世界就改变自己.</div>;
};
About.loadData = () => { 
  setTimeout(() => { 
    console.log('about loadData');
  })
}
export default About;
