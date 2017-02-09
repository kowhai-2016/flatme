routing: routerReducer,
forms: combineForms({ initialAccountState }, 'forms')

const initialAccountState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
}
