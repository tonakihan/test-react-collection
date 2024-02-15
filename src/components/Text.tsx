import { useEffect } from "react";
import { compareChars, getCurrentChar } from "../helpers/charTransform";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsTimerOn } from "../redux/store/timerSlice";
import { 
  fetchText, 
  setText, 
  setCurrentCharIndex, 
  increasePressingCount, 
  setMistakes 
} from "../redux/store/textSlice";
import { setIsTestFinished } from "../redux/store/testSlice";

//TODO: объясни всю логику
function Text() {
  const dispatch = useAppDispatch();
  const {sentences} = useAppSelector(state => state.testSlice);
  const {
    text,
    isLoading,
    error,
    currentCharIndex,
    mistakes,
    pressingCount
  } = useAppSelector(state => state.textSlice);

  useEffect(() => {
    dispatch(fetchText(sentences))
  }, [dispatch]); // Что я добьюсь dispatch

  useEffect(() => {
    const newText = getCurrentChar(text, currentCharIndex);
    dispatch(setText(newText));
  }, [dispatch, currentCharIndex]);

  useEffect(() => {
    if (pressingCount === 0 && text.length > 0) {
      dispatch(setIsTimerOn(true));    
    }

    if (currentCharIndex < text.length) {
      function keyPressHandler(event: KeyboardEvent) {
        const [
          newText, 
          newCurrentIndex, 
          newMistakes
        ] = compareChars(text, currentCharIndex, event.key, mistakes);

        dispatch(setCurrentCharIndex(newCurrentIndex));
        dispatch(setText(newText));
        dispatch(setMistakes(newMistakes));
        dispatch(increasePressingCount());

        if (newCurrentIndex === text.length) {
          dispatch(setIsTimerOn(false));
          dispatch(setIsTestFinished(true));
        }
      }

      document.addEventListener('keypress', keyPressHandler);

      return function() {
        document.removeEventListener('keypress', keyPressHandler);
      }
    }
  }, [dispatch, text]);

  return (
    <div>
      {error &&
        <p>{error}</p>
      }
      {isLoading 
        ? <p>Loading text...</p>
        : <div>
          {text.map((item, index) => (
            <span key={index}>
              {item.char}
            </span>
          ))}
        </div>
      }

    </div>
  )
}

export default Text;