import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import SaveButton from './components/SaveButton'
import ClearButton from './components/ClearButton'
import Input from './components/Input'

const App = () => {
  const {
    fields,
    submit,
    clear,
    handleChangeName,
    handleChangeValue
  } = useContext(AppContext)

  return (
    <div className='App'>
      {fields.map(item => (
        <Input
          {...item}
          handleChangeName={handleChangeName}
          handleChangeValue={handleChangeValue}
          key={item.id}
        />
      ))}
      <br />
      <SaveButton submit={submit} /> <ClearButton clear={clear} />
    </div>
  )
}

export default App
