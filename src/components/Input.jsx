import useInput from "../hooks/useInput";

let firstAlert = true;

function Input() {
  const hookInput1 = useInput('');
  const hookInput2 = useInput('');

  function onClick(event) {
    event.preventDefault();
    if (firstAlert) {
      alert("Результат в консоли"); 
      firstAlert = false;
    }
    console.log("hook1: ", hookInput1.value);
    console.log("hook2: ", hookInput2.value);
  }

  return (
    <div>
      <input {...hookInput1} type="text" placeholder="text1"/>
      <input {...hookInput2} type="text" placeholder="text2"/>
      <button onClick={onClick}>Нажми на меня</button>
    </div>
  )
}

export default Input;