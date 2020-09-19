import React, { useState } from "react";

export const DetailRow = (props) => {
  const { name, value } = props;
  const [read, setRead] = useState(true);
  const [field, setField] = useState(value);

  function editField() {
    setRead(false);
  }

  function handleChange(event) {
    setField(event.target.value);
  }

  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-4 col-form-label">
        {name}:
      </label>
      <div className="col-sm-4">
        <input
          className="form-control"
          readOnly={read}
          type="text"
          name={name}
          id={name}
          value={field}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="col-sm-4">
        <button className="btn btn-outline-warning" onClick={editField}>
          Edit
        </button>
        <button className="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  );
};

export const TransactionDetailsFull = (props) => {
  const { value } = props;
  const keys = Object.keys(value).map((key, i) => {
    if (typeof value[key] !== "object") {
      return <DetailRow name={key} value={value[key]} />;
    } else {
      return (
        <div>
          <h5>{key}: </h5>
          <div className="container m-3" id={key}>
            <TransactionDetailsFull value={value[key]} />
          </div>
        </div>
      );
    }
  });

  return <>{keys}</>;
};

export default TransactionDetailsFull;
