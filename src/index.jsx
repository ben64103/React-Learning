import React from "react";

const Hello = (props) => {
  return <p>Hello {props.name} you are {props.age} years old</p>;
};

const ReturnHello = () => {
  const age = 10
  const names = [
    {name: 'John', age: 14}
  ]
  return (
    <div>
      <Hello name={names[0].name} age={age + 10}/>
      <Hello name='Mikey' age ={age}/>
      <Hello name='Smith' age={names[0].age}/>
      <Hello name='Chris' age={age * 4}/>
    </div>
  );
};

const Main = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return React.createElement(
    "div",
    null,
    React.createElement("blockquote", null, "This is some content"),
    React.createElement("blockquote", null, "This is some content"),
    <ReturnHello />
  );
};
export default Main;


// props - passing data to components
