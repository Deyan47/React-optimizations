import React, { useMemo } from "react";

import classes from "./Demo.module.css";

const Demo = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  //// now we'll not sort the list unnecessery again and again
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Demo);
