import React from "react";

const Demo = (props) => {
  return <p>{props.show ? "This is new" : ""}</p>;
};

export default React.memo(Demo);
//react looking if the props change, if not the cmpnt doesn't re-evaluate
