import { useCallback, useState } from "react";
import "./styles.css";
import { Counter } from "./Counter";
import { ColorPicker } from "./ColorPicker";
import { useCounter } from "./counter-hook";
import { RollDice } from "./RollDice";
import { useRoll } from "./use-roll";

export default function App() {
  const [opened, setOpened] = useState(false);
  const { rolling, roll, endRoll, roll1, roll2 } = useRoll();
  const p1 = useCounter(20);
  const p2 = useCounter(20);

  const onOpen = useCallback(() => {
    setOpened(!opened);

    if (opened === true) {
      endRoll();
    }
  }, [opened, endRoll]);

  const onReset = useCallback(() => {
    p1.reset();
    p2.reset();
    onOpen();
  }, [p1, p2, onOpen]);

  return (
    <section className="board">
      {rolling ? <RollDice greater={roll1 > roll2} value={roll1} /> : p1.color == null ? (
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
          <button
            className="control icofont icofont-dice"
            onClick={roll}
          />
        </div>
      </div>
      {rolling ? <RollDice greater={roll1 < roll2} revert value={roll2} /> : p2.color == null ? (
        <ColorPicker counter={p2} />
      ) : (
        <Counter revert={true} counter={p2} />
      )}
    </section>
  );
}
