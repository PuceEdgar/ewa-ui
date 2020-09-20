import React from "react";
import { GetObjectDetails } from "./GetObjects";
import { DetailRow } from "./TransactionDetailsFull";

const Link = (props) => {
  const { kid, num } = props;

  let classDescription = "";
  let selected = false;
  if (kid === "transaction") {
    classDescription = "nav-link active";
    selected = true;
  } else {
    classDescription = "nav-link";
    selected = false;
  }

  return (
    <a
      className={classDescription}
      id={`v-pills-${kid}-tab-${num}`}
      data-toggle="pill"
      href={`#v-pills-${kid}-${num}`}
      role="tab"
      aria-controls={`v-pills-${kid}-${num}`}
      aria-selected={selected}
    >
      {kid}
    </a>
  );
};

const Info = (props) => {
  const { kid, value, num } = props;
  let classDescription = "";
  if (kid === "transaction") {
    classDescription = "tab-pane fade show active";
  } else {
    classDescription = "tab-pane fade";
  }

  return (
    <div
      class={classDescription}
      id={`v-pills-${kid}-${num}`}
      role="tabpanel"
      aria-labelledby={`v-pills-${kid}-tab-${num}`}
    >
      <ShowValues values={value} />
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
  const { object, num } = props;

  const keyValuePair = GetObjectDetails(object);

  const keys = Object.values(keyValuePair).map((entry, i) => {
    return Object.entries(entry).map((kvp, i) => {
      return <Link kid={kvp[0]} num={num} key={i} />;
    });
  });

  const values = Object.values(keyValuePair).map((entry, i) => {
    return Object.entries(entry).map((kvp, i) => {
      const value = Object.values(kvp[1]);
      return <Info kid={kvp[0]} value={value} num={num} key={i} />;
    });
  });

  return (
    <div className="row">
      <div className="col-3">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {keys}
        </div>
      </div>
      <div className="col-9">
        <div class="tab-content" id="v-pills-tabContent">
          {values}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
