import React from "react";

const ErrorFormMsg = ({ errorMessage }) => {
  return (
    <p className="text-white text-xs mb-2 pl-3 tracking-widest absolute">
      {errorMessage}
    </p>
  );
};

export default ErrorFormMsg;
