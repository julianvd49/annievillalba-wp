import { useContext } from "react";
import { StateContext } from "../utils/state";

const LangBtn = () => {
  const { isEN, setIsEN } = useContext(StateContext);

  const changeLang = () => {
    setIsEN(!isEN);
  };

  return (
    <span className="lang" onClick={changeLang}>
      {isEN ? "Español" : "English"}
    </span>
  );
};

export default LangBtn;
