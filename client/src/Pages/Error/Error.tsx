import React from "react";

const Error: React.FC<{}> = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1>404!</h1>
        <p>
          <span className="text-danger">Oops! </span>
          Page Not Found!
        </p>
        <p className="lead">
          Something has gone terribly wrong. I would assume it was because of
          Ross.
        </p>
      </div>
    </div>
  );
};

export default Error;
