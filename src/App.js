import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import SaveButton from './components/SaveButton'
import ClearButton from './components/ClearButton'
import Input from './components/Input'

const App = () => {
  const { fields } = useContext(AppContext)

  return (
    <div className='App'>
      {fields.map(item => (
        <Input {...item} key={item.id} />
      ))}
      <br />
      <SaveButton /> <ClearButton />
    </div>
  )
}

export default App
