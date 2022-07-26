import React from "react";

const ContactItem = (props) => {
  return (
    <li className="flex gap-5 md:flex-col md:items-start lg:flex-row items-center mb-3 text-lg">
      {props.children}
    </li>
  );
};

export default ContactItem;
