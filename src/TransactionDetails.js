import React from "react";
import { GetObjectDetails } from "./GetObjects";
import { DetailRow } from "./TransactionDetailsFull";

const Button = (props) => {
  const { kid } = props;
  return (
    <button
      className="btn btn-outline-success"
      type="button"
      data-toggle="collapse"
      data-target={`#${kid}`}
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      {kid}
    </button>
  );
};

const Link = (props) => {
  const { kid } = props;
  return (
    <a
      class="nav-link"
      id={`${kid}-tab`}
      data-toggle="tab"
      href={`#${kid}`}
      role="tab"
      aria-controls={kid}
    >
      {kid}
    </a>
  );
};

const Info = (props) => {
  const { kid, value } = props;
  return (
    <div
      class="tab-pane fade"
      id={kid}
      role="tabpanel"
      aria-labelledby={`${kid}-tab`}
    >
      test
    </div>
  );
};

const ShowValues = (props) => {
  const { values } = props;

  const filtered = Object.values(values).filter((val, i) => {
    return typeof val[1] !== "object";
  });

  const comp = filtered.map((item, i) => {
    return <DetailRow key={i} name={item[0]} value={item[1]} />;
  });

  return <div>{comp}</div>;
};

const TransactionDetails = (props) => {
  const { object } = props;

  const keyValuePair = GetObjectDetails(object);

  const entries = Object.values(keyValuePair).map((entry, i) => {
    return Object.entries(entry).map((kvp, i) => {
      const key = kvp[0];
      const value = Object.values(kvp[1]);
      return (
        <div className="container m-3">
          <Button kid={kvp[0]} />
          <div className="collapse" id={key}>
            <ShowValues key={i} values={value} />
          </div>
        </div>
      );
    });
  });

  return <div>{entries}</div>;
};

export default TransactionDetails;
