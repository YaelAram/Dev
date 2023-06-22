import { useDispatch, useSelector } from 'react-redux'
import calendarApi from '../api/calendarApi'
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } from '../store/calendar/calendarSlice'
import { jsonToEvents } from '../helpers'
import Swal from 'sweetalert2'

export const useCalendarStore = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)
  const { user } = useSelector((state) => state.auth)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
        dispatch(onUpdateEvent({ ...calendarEvent, user }))
        return
      }
      const { data } = await calendarApi.post('/events', calendarEvent)
      dispatch(onAddNewEvent({ id: data.event.id, ...calendarEvent, user }))
    } catch (error) {
      Swal.fire('Error al guardar', error.response.data?.error, 'error')
      console.error(error)
    }
  }

  const startDeletingEvent = async () => {
    try {
      if (activeEvent) {
        await calendarApi.delete(`/events/${activeEvent.id}`)
        dispatch(onDeleteEvent())
        return
      }
      Swal.fire('Error al eliminar evento', 'Da click sobre el evento a eliminar', 'error')
    } catch (error) {
      console.error(error)
      Swal.fire('Error al eliminar evento', error.response.data?.error, 'error')
    }
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events')
      const events = jsonToEvents(data.events)
      dispatch(onLoadEvents(events))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent
  }
}
