import React from 'react';
import './index.css';

function Panel({

  divClassName,
  children,

}) {
  return (
    <div className="menu">

      <div className={divClassName}>{children}</div>
    </div>

  );
}

export default Panel;
