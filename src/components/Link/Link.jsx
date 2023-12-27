import React from "react";
import './Link.scss';

const Link = (props) => {
  const {
    children,
    href,
    className="",
    target="",
    ariaLabel,
  } = props;

  return (
  <>
    <a
      className={`link ${className}`}
      href={href}
      target={target}
      rel={target ? "noreferrer" : ""}
      aria-label={ariaLabel}
    >
      {
        children
      }
    </a>
  </>
  );
};

export default Link;
