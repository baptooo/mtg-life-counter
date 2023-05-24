import React, { useCallback } from "react";

export const Counter = (props: { counter: any; revert?: boolean }) => {
  const handleClick = useCallback(
    (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const sens = window.innerWidth / 2 - evt.pageX < 0 ? 1 : -1;

      props.counter[sens === -1 ? "minus" : "plus"]();
    },
    [props.counter]
  );

  return (
    <div
      className={`counter ${props.revert ? "revert" : ""} bg-${
        props.counter.color
      }`}
      onClick={handleClick}
    >
      <div className="help">+</div>
      <h2 className="counter-value">{props.counter.value || "💩"}</h2>
      <div className="help">-</div>
    </div>
  );
};
