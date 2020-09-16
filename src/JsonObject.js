import React from "react";

export const DetailRow = (props) => {
  const { name, value } = props;

  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-4 col-form-label">
        {name}:
      </label>
      <div className="col-sm-4">
        <input
          className="form-control"
          readOnly
          type="text"
          name={name}
          id={name}
          value={value}
          // onChange={handleChange}
        />
      </div>
    </div>
  );
};

export const JsonObject = (props) => {
  const { value } = props;
  const keys = Object.keys(value).map((key, i) => {
    if (typeof value[key] !== "object") {
      return <DetailRow name={key} value={value[key]} />;
    } else {
      return (
        <div>
          {/* <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target={`#${key}`}
            aria-expanded="false"
            aria-controls={key}
          >
            {key}
          </button> */}
          <h4>{key}</h4>
          <div className="container m-3">
            <JsonObject value={value[key]} />
          </div>

          {/* <div className="collapse" id={key}>
            <div className="card card-body">
              
            </div>
          </div> */}
        </div>
      );
    }
  });

  return <>{keys}</>;
};

export default DetailRow;
