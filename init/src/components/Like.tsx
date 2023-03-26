import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  propsOnClick: () => void;
  initial: boolean;
};

function Like({ propsOnClick, initial }: Props) {
  const [status, setStatus] = useState(initial);

  const onClick = () => {
    setStatus(!status);
    propsOnClick();
  };

  if (status)
    return <AiFillHeart color="#ff6b81" size="50" onClick={onClick} />;
  return <AiOutlineHeart color="#ff6b81" size="50" onClick={onClick} />;
}

export default Like;
