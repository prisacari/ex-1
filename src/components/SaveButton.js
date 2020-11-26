import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const SaveButton = () => {
  const { submit } = useContext(AppContext)
  return <button onClick={submit}>Submit</button>
}

export default SaveButton
