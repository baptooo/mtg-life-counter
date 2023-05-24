import { useCallback, useState } from "react";

export type MTGColor = "white" | "black" | "blue" | "red" | "green";

export interface CounterHook {
  value: number;
  color: MTGColor;
  setColor(color: MTGColor): void;
  plus(): void;
  minus(): void;
  reset(): void;
}

export const useCounter = (defaultValue: number) => {
  const [value, setValue] = useState(defaultValue);
  const [color, setColor] = useState<MTGColor>();

  const plus = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  const minus = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  const reset = useCallback(() => {
    setValue(defaultValue);
    setColor(undefined);
  }, [defaultValue]);

  return {
    value,
    color,
    setColor,
    plus,
    minus,
    reset
  } as CounterHook;
};
