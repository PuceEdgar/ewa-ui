import React from "react";
import { GetObjectDetails } from "./GetObjects";

const ShowValues = (props) => {
  const { values } = props;

  const filtered = Object.values(values).filter((val, i) => {
    // console.log("filtered: " + val);
    return typeof val[1] !== "object";
  });
  //   console.log("filtered: " + filtered);
  const comp = filtered.map((item, i) => {
    return (
      <div>
        <p>
          {item[0]} : {item[1]}
        </p>
      </div>
    );
  });

  return <div>{comp}</div>;
};

const Display = (props) => {
  const { object } = props;

  const keyValuePair = GetObjectDetails(object);

  const entries = Object.values(keyValuePair).map((entry, i) => {
    // console.log("v: " + entry);
    return Object.entries(entry).map((kvp, i) => {
      //   console.log("key: " + kvp[0]);
      const key = kvp[0];
      const value = Object.values(kvp[1]);
      //   console.log("value: " + value);
      return (
        <div>
          <button
            className="btn btn-outline-success"
            type="button"
            data-toggle="collapse"
            data-target={`#${key}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {key}
          </button>

          <ShowValues key={i} values={value} />
        </div>
      );
    });
  });

  return <div>{entries}</div>;
};

export default Display;
