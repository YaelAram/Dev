import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import { onLogin, onLogout, setCheckingStatus, clearErrorMessage } from '../store/auth/authSlice'
import { onLogoutCalendar } from '../store/calendar/calendarSlice'

export const useAuthStore = () => {
  const dispatch = useDispatch()
  const { status, user, errorMessage } = useSelector((state) => state.auth)

  const startLogin = async ({ email, password }) => {
    dispatch(setCheckingStatus())
    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      localStorage.setItem('x-token', data.token)
      localStorage.setItem('x-token-start', new Date().getTime())
      dispatch(onLogin({ uid: data.uid, name: data.name }))
    } catch (error) {
      dispatch(onLogout('Wrong Email and Password'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 100)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    dispatch(setCheckingStatus())
    try {
      const { data } = await calendarApi.post('/auth/user', { name, email, password })
      if (data.ok) startLogin({ email, password })
    } catch ({ response }) {
      const { data } = response
      let msg = ''
      if (data.errors) {
        const messages = []
        for (const key in data.errors) messages.push(data.errors[key].msg)
        msg = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(messages)
      } else msg = data.error.split(':').at(1).trim()
      dispatch(onLogout(msg))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 100)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('x-token')

    if (!token) return dispatch(onLogout())

    try {
      const { data } = await calendarApi.get('/auth/renew')
      localStorage.setItem('x-token', data.token)
      localStorage.setItem('x-token-start', new Date().getTime())
      dispatch(onLogin({ uid: data.uid, name: data.name }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  const startLogOut = () => {
    localStorage.clear()
    dispatch(onLogoutCalendar())
    dispatch(onLogout())
  }

  return {
    status,
    user,
    errorMessage,

    startLogin,
    startRegister,
    checkAuthToken,
    startLogOut
  }
}
