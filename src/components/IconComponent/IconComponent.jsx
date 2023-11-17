import React from "react";
import IcomoonReact from "icomoon-react";

import iconSet from '../../assets/icons/selection.json';

const IconComponent = (props) => {
  const {
    color,
    size = "100%",
    icon,
    className,
    ariaLabel,
  } = props;

  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      ariaLabel={ariaLabel}
      />
    );
};

export default IconComponent;
