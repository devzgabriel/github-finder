interface State {
  theme: string;
  user: string;
}

interface Action {
  type: string;
  payload: string;
}

export const initialState = {
  theme: "light",
  user: "",
};

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_THEME": {
      const { theme } = state;
      const newTheme = theme === "light" ? "dark" : "light";

      const newState = { ...state, theme: newTheme };

      return newState;
    }
    case "UPDATE_USER": {
      const newUser = action.payload;
      return { ...state, user: newUser };
    }

    default:
      return state;
  }
}
