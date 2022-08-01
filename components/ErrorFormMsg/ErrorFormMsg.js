import React from "react";

// const setErrorFormMsg = (errorMessage) => {
//   if (errorMessage === "required") {
//     return "* Required Field";
//   }
//   if (errorMessage === "minLength") {
//     return "* Required Field";
//   }
// };

const ErrorFormMsg = ({ errorMessage }) => {
  return (
    <p className="text-white text-xs  mb-2 pl-3 tracking-widest">
      {errorMessage}
    </p>
  );
};

export default ErrorFormMsg;
