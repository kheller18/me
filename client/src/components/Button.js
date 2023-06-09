import React from 'react';

// module for dynamic button creation
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props['className']}
      id={props['id']}
      style={props['style']}
      value={props['value']}
      data = {props['data']}
    >
      {props.children}
    </button>
  );
};

export default Button;
