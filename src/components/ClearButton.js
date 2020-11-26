import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const ClearButton = () => {
  const { clear } = useContext(AppContext)

  return <button onClick={clear}>Clear</button>
}

export default ClearButton
