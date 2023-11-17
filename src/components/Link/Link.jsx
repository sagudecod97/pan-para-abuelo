import React from "react";
import './Link.scss';

const Link = (props) => {
  const {
    children,
    href,
    className="",
    target="",
    ariaLabel,
    ref,
  } = props;
  return (
  <>
    <a
      className={`link ${className}`}
      href={href}
      target={target}
      rel={target ? "noreferrer" : ""}
      aria-label={ariaLabel}
      ref={ref}
    >
      {
        children
      }
    </a>
  </>
  );
};

export default Link;
