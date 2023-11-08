import React from "react";
import './Link.scss';

const Link = (props) => {
  const {
    children,
    href,
    className=""
  } = props;
  return (
  <>
    <a
      className={`link ${className}`}
      href={href}
    >
      {
        children
      }
    </a>
  </>
  );
};

export default Link;
