import { useState, memo } from 'react'

const Label = memo(({ name, id, handleChangeName }) => {
  const [editMode, setEditMode] = useState(false)
  const [fieldName, setName] = useState(name)

  const toggle = () => {
    setEditMode(prev => !prev)
  }

  return editMode ? (
    <>
      <input
        name={name}
        value={fieldName}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          toggle()
          handleChangeName({ id, fieldName })
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          toggle()
        }}
      >
        cancel
      </button>
    </>
  ) : (
    <>
      <label htmlFor={id}>{name}</label> <button onClick={toggle}>edit</button>
    </>
  )
})

const Input = memo(
  ({ id, name, value, handleChangeName, handleChangeValue }) => {
    const handleChange = value => {
      handleChangeValue({ value, id })
    }

    return (
      <div>
        <Label name={name} id={id} handleChangeName={handleChangeName} />
        <br />
        <input
          name={name}
          value={value}
          id={id}
          onChange={e => handleChange(e.target.value)}
        />{' '}
        {value && <button onClick={() => handleChange('')}>{'clear'}</button>}
        <br />
        <br />
      </div>
    )
  },
  (prev, next) => {
    if (prev.name !== next.name) {
      return false
    } else if (prev.value !== next.value) {
      return false
    }
    return true
  }
)

export default Input
