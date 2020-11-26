import React, { createContext, useReducer } from 'react'
import { appReducer } from '../reducers/appReducer'

export const AppContext = createContext()

const initialState = {
  fields: Array(30)
    .fill()
    .map((item, i) => ({
      name: `Field-${i + 1}`,
      value: '',
      id: i + 1
    }))
}

const AppContextProvider = props => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const handleChangeName = payload => {
    dispatch({ type: 'CHANGE_NAME', payload })
  }

  const handleChangeValue = payload => {
    dispatch({ type: 'CHANGE_VALUE', payload })
  }

  const clear = () => {
    dispatch({ type: 'CLEAR', payload: initialState.fields })
  }

  const submit = async () => {
    try {
      const { fields } = state
      const sendData = {}

      fields.forEach(({ name, value }) => {
        sendData[name] = value
      })

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: sendData
      }

      await fetch('http://localhost:300/rest', requestOptions)
    } catch (error) {
      clear()
      console.log(error?.message)
    }
  }

  const contextValues = {
    ...state,
    handleChangeName,
    handleChangeValue,
    submit,
    clear
  }
  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
