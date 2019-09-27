const changeInput = ( e, value, setValue ) => {
  console.log(value)
  let name  = e.target.name
  console.log(name)
  let valueInput = e.target.value
  console.log(valueInput)
  let newValue = {...value}

  let inputs = {
    'email': () => {
      newValue.email = valueInput
      setValue(newValue)
    },
    'password': () => {
      newValue.password = valueInput
      setValue(newValue)
    },
    'firstName': () => {
      newValue.firstName = valueInput
      setValue(newValue)
    },
    'lastName': () => {
      newValue.lastName = valueInput
      setValue(newValue)
    },
    'confirm': () => {
      newValue.confirm = valueInput
      setValue(newValue)
    },
    'default': () => console.log('Wrong name')
  }
  return (inputs[name]() || inputs['default']())
}

export default changeInput
