import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  removeAlert: () => void;
}

function Alert({ children, removeAlert }: Props) {
  return (
    <div>
      {children} <button onClick={removeAlert}>Remove</button>
    </div>
  );
}

export default Alert;
