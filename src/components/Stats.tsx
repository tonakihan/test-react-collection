import { PropsWithChildren, useEffect, useState } from "react";
import { speedCounting, accuracyCounting } from "../helpers/statsCounting";
import { increaseSeconds } from "../redux/store/timerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Stats({children}: PropsWithChildren) {
  const dispatch = useAppDispatch();
  const {
    mistakes,
    pressingCount,
  } = useAppSelector(state => state.textSlice);
  const {
    seconds,
    isTimerOn,
  } = useAppSelector(state => state.timerSlice);

  const [speed, setSpeed] = useState('0.00');
  const [accuracy, setAccuracy] = useState('0.00');

  useEffect(() => {
    const correctLetters = pressingCount - mistakes;

    setAccuracy(accuracyCounting(mistakes, pressingCount));
    setSpeed(speedCounting(correctLetters, seconds));
  }, [mistakes, pressingCount, seconds]);

  useEffect(() => {
    if (isTimerOn) {
      const timer = setTimeout(() => {
        dispatch(increaseSeconds());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTimerOn, seconds, dispatch]);

  return (
    <div>
      <div>
        <p>Speed</p>
        <p>{speed} WPM</p>
      </div>
      <div>
        <p>accuracy</p>
        <p>{accuracy} %</p>
      </div>
      {children}
    </div>
  )
}

export default Stats;