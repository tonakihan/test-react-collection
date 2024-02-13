type ModalWindowProps = {
  //TODO: Зачем?
  children: JSX.Element | JSX.Element[],
  title: string,
}

function ModalWindow({title, children}: ModalWindowProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default ModalWindow;