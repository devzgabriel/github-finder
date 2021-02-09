import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const HandleChangeTheme = () => {
  const { dispatch } = useContext(AppContext);
  dispatch({ type: "UPDATE_THEME", payload: null });
};

export default HandleChangeTheme;
