import { restoreText } from "../helpers/charTransform";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetTestState, setIsTestFinished } from "../redux/store/testSlice";
import { resetTextState, setText } from "../redux/store/textSlice";
import { resetSeconds } from "../redux/store/timerSlice";
import Stats from "./Stats";
import Text from "./Text";
import Button from "./UI/Button";
import ModalWindow from "./UI/ModalWindow";


function Test() {
  const dispatch = useAppDispatch();
  const isTestFinished = useAppSelector(state => state.testSlice.isTestFinished);
  const text = useAppSelector(state => state.textSlice.text);

  function restart() {
    dispatch(resetSeconds());
    dispatch(resetTextState());
    dispatch(setText(restoreText(text)));

    if (isTestFinished) {
      dispatch(setIsTestFinished(false));
    }
  }

  function newTest() {
    dispatch(resetTestState());
    dispatch(resetTextState());
    dispatch(resetSeconds());
  }

  return (
    <section>
      <p>Test</p>
      <Text/>
      <Stats>
        <Button 
          btnText='restart' 
          onClick={restart} 
          onFocus={(event) => event.target.blur()} 
        />
      </Stats>
      {isTestFinished && 
        <ModalWindow title='Test completed!'>
          <Stats/>
          <Button btnText='restart' onClick={restart}/>
          <Button btnText='new test' onClick={newTest}/>
        </ModalWindow>
      }
    </section>
  );
}

export default Test;