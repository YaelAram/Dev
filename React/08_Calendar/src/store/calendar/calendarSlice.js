import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [],
  activeEvent: null,
  isLoadingEvents: true
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) return payload
        return event
      })
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent && state.activeEvent?.id) {
        state.events = state.events.filter((event) => event.id !== state.activeEvent.id)
        state.activeEvent = null
      }
    },
    onLoadEvents: (state, { payload }) => {
      state.isLoadingEvents = false
      state.events = payload
    },
    onLogoutCalendar: (state) => {
      state.activeEvent = null
      state.events = []
      state.isLoadingEvents = true
    }
  }
})

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar
} = calendarSlice.actions
