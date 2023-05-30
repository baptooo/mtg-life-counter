import { PropsWithChildren, useMemo, FC } from "react";
import "./ColorPicker.css";
import { CounterHook, MTGColor } from "./counter-hook";

type Props = PropsWithChildren<{
  counter: CounterHook;
  revert?: boolean;
}>
const COLORS: MTGColor[] = ["black", "red", "green", "white", "blue"];

export const ColorPicker: FC<Props> = ({ revert, counter }) => {
  const positions = useMemo(() => {
    const len = 5;
    const radius = 10;
    const gap = Math.PI * 2 / len;
    let offset = Math.PI * 0.3;

    if (revert) offset += Math.PI;

    return COLORS.map((_, idx) => {
      const x = Math.cos(idx * gap + offset) * radius - 4;
      const y = Math.sin(idx * gap + offset) * radius - 4;
      return {x, y};
    });
  }, [revert]);

  return (
    <div className="colorpicker">
      {COLORS.map((col, idx) => (
        <button
          style={{ transform: `translate3d(${positions[idx].x}vh, ${positions[idx].y}vh, 0)`}}
          className={`color bg-${col}`}
          key={col}
          onClick={() => counter.setColor(col)}
        />
      ))}
    </div>
  );
};
