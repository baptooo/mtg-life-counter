import { useCallback, useState } from "react";
import "./styles.css";
import { Counter } from "./Counter";
import { ColorPicker } from "./ColorPicker";
import { useCounter } from "./counter-hook";

export default function App() {
  const [opened, setOpened] = useState(false);
  const p1 = useCounter(20);
  const p2 = useCounter(20);

  const onOpen = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const onReset = useCallback(() => {
    p1.reset();
    p2.reset();
    onOpen();
  }, [p1, p2, onOpen]);

  return (
    <section className="board">
      {p1.color == null ? (
        <ColorPicker revert={true} counter={p1} />
      ) : (
        <Counter counter={p1} />
      )}
      <button
        className="logo icofont icofont-flame-torch"
        onClick={onOpen}
      ></button>
      <div
        className={`controls ${opened ? "opened" : ""}`}
        onClick={(evt) => evt.stopPropagation()}
      >
        <div className="controls-list">
          <button
            className="control icofont icofont-refresh"
            onClick={onReset}
          />
          <div />
        </div>
      </div>
      {p2.color == null ? (
        <ColorPicker counter={p2} />
      ) : (
        <Counter revert={true} counter={p2} />
      )}
    </section>
  );
}
