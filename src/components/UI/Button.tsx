import { ComponentPropsWithRef, FC } from "react";

//TODO: погуглить
interface ButtonProps extends ComponentPropsWithRef<'button'> {
  btnText: string,
}

function Button({btnText, ...props}: ButtonProps) {
  return (
    <button {...props}>
      {btnText}
    </button>
  );
}

export default Button;