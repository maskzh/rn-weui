export default function createParseReducer(type, convert) {
  return (state, action) => {
    if (action.type === type) {
      return action.list.map(convert)
    }
    return state || []
  }
}
