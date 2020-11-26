export const appReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return { ...state, fields: action.payload }

    case 'CHANGE_NAME': {
      const { id, fieldName } = action.payload

      return {
        ...state,
        fields: state.fields.map(obj =>
          obj.id === id ? { ...obj, name: fieldName } : obj
        )
      }
    }
    case 'CHANGE_VALUE': {
      const { id, value } = action.payload

      return {
        ...state,
        fields: state.fields.map(obj =>
          obj.id === id ? { ...obj, value: value } : obj
        )
      }
    }

    default:
      return state
  }
}
