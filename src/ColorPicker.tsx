import "./ColorPicker.css";
import { CounterHook, MTGColor } from "./counter-hook";

const COLORS: MTGColor[] = ["green", "white", "blue", "black", "red"];

export const ColorPicker = (props: {
  counter: CounterHook;
  revert?: boolean;
}) => {
  return (
    <div className={`colorpicker ${props.revert ? "revert" : ""}`}>
      <div className="colorpicker-wrapper">
        {COLORS.map((col) => (
          <button
            className={`color bg-${col}`}
            key={col}
            onClick={() => props.counter.setColor(col)}
          />
        ))}
      </div>
    </div>
  );
};
