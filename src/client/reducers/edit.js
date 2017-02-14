export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_SUCCESS':
      return {
        fields: action.fields
      }

    default:
      return state
  }
}
