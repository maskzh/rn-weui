import { handleActions } from 'redux-actions'

const initialState = {
  tab: 'home',
  navMapper: {},
  navStyles: { backgroundColor: 'black' }
}

export default handleActions({
  'switch tab'(state, action) {
    return {
      ...state,
      tab: action.payload
    }
  },
  'set navMapper'(state, action) {
    return {
      ...state,
      navMapper: action.payload
    }
  },
  'set navStyles'(state, action) {
    return {
      ...state,
      navStyles: action.payload
    }
  }
}, initialState)
