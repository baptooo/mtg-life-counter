import { useCallback, useState } from "react";

export const getRoll = () => (Math.random() * 20 << 0) + 1

export const useRoll = () => {
    const [roll1, setRoll1] = useState(0);
    const [roll2, setRoll2] = useState(0);
    const [rolling, setRolling] = useState(false);
  
    const roll = useCallback(() => {
      setRolling(true);

      let newRoll1 = getRoll();
      while(newRoll1 === roll1) {
        newRoll1 = getRoll();
      }

      let newRoll2 = getRoll();
      while(newRoll2 === roll1) {
        newRoll2 = getRoll();
      }

      setRoll1(newRoll1);
      setRoll2(newRoll2);
    }, [roll1, roll2]);
  
    const endRoll = useCallback(() => {
      setRolling(false);
    }, []);
  
    return {
      roll1, roll2, roll, endRoll, rolling,
    }
}