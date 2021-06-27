export interface UserInterface {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
}

interface State {
  theme: string
  user: UserInterface
}

interface Action {
  type: string
  payload: any
}

function getStorageTheme() {
  return (
    JSON.parse(String(localStorage.getItem('ghfinder:localTheme'))) || 'light'
  )
}
function getStorageUser() {
  return JSON.parse(String(localStorage.getItem('ghfinder:localUser'))) || {}
}

export const initialState = {
  theme: getStorageTheme(),
  user: getStorageUser(),
}

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'UPDATE_THEME': {
      const { theme } = state
      const newTheme = theme === 'light' ? 'dark' : 'light'

      const newState = { ...state, theme: newTheme }
      localStorage.setItem('ghfinder:localTheme', JSON.stringify(newTheme))

      return newState
    }
    case 'UPDATE_USER': {
      const newUser = action.payload
      localStorage.setItem('ghfinder:localUser', JSON.stringify(newUser))
      return { ...state, user: newUser }
    }

    case 'RESET_USER': {
      localStorage.clear()
      return { ...state, user: {} }
    }

    default:
      return state
  }
}
