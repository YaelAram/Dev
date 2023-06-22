import React, { useEffect } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Login } from '../auth/pages/Login'
import { CalendarPage } from '../calendar/pages/CalendarPage'
import { useAuthStore } from '../hooks'

export function AppRouter () {
  const { status: authStatus, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  return (
    <Routes>
      {
        (['not-authenticated', 'checking'].includes(authStatus))
          ? (
            <>
              <Route path='/auth/*' element={<Login />} />
              <Route path='/*' element={<Navigate to='/auth/login' />} />
            </>
            )
          : (
            <>
              <Route path='/' element={<CalendarPage />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
            )
      }
    </Routes>
  )
};
