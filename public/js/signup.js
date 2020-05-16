/* eslint-disable */
import axios from 'axios'
import { showAlert } from './alerts'

export const signup = async  (name,email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:4000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    })

    if (res.data.status === 'success') {
      showAlert('success', 'Signed up successfully')
      window.setTimeout(()=>{
        location.assign('/')
      }, 1000)
    }

  } catch (error) {
    showAlert('error', error.response.data.message)
  }
}