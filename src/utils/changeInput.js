const changeInput = ( e, value, setValue ) => {
  let name  = e.target.name
  let valueInput = e.target.value
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
    'accepted': () => {
      newValue.accepted = !newValue.accepted
      setValue(newValue)
    },
    'default': () => console.log('Wrong name')
  }

  if (inputs[name]) {
    inputs[name]()
  } else {
    inputs.defalt()
  }
}

export default changeInput
