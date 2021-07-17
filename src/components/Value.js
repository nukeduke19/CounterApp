import React from "react";
import { useState } from "react";

function Value(props) {
  const [count, setCount] = useState(5);

  return (
    <div className="cart badge bg-primary p-2" style={containerStyles}>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setCount(count + 1)}
        style={{ fontSize: 18 }}
      >
        +
      </button>
      <span style={{ marginRight: 20, marginLeft: 20 }}>{count}</span>
      <button
        className="btn btn-primary btn-sm "
        onClick={() => setCount(count - 1)}
        style={{ fontSize: 18 }}
      >
        -
      </button>
    </div>
  );
}

const containerStyles = {
  borderRadius: 50,
  width: 150,
  fontSize: 18,
};
export default Value;
