import React from "react";
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { setIsTestStarted, setSentences } from "./redux/store/testSlice";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Test from "./components/Test";
import Button from "./components/UI/Button";
import ModalWindow from "./components/UI/ModalWindow";

function App() {
  const dispath = useAppDispatch();
  const isTestStarted = useAppSelector(state => state.testSlice.isTestStarted);

  const testStateToggler = () => dispath(setIsTestStarted(true));

  return (
    <>
      <Header/>
      <main>
        {isTestStarted 
         ? <Test/>
         : <ModalWindow title='Take a typing test'>
            <Button btnText="start" onClick={testStateToggler}/>
          </ModalWindow>
        }
      </main>
      <Footer/>
    </>
  );
}

export default App;
