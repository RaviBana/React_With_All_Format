import React, { useState, useEffect } from "react";
import useTitle from "./useTitle";

const Second = () => {
  const [count, setCount] = useTitle(0);

  return (
    <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
  );
};

export default Second;
