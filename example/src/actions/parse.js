import Parse from 'parse/react-native'
import { logError, InteractionManager } from 'react-native'

const Maps = Parse.Object.extend('Maps')
const Notification = Parse.Object.extend('Notification')

function loadParseQuery(type, query) {
  return (dispatch) => query.find({
    success: (list) => {
      InteractionManager.runAfterInteractions(() => {
        dispatch(({ type, list }))
      })
    },
    error: logError,
  })
}

export const loadSessions = () =>
  loadParseQuery(
    'LOADED_SESSIONS',
    new Parse.Query('Agenda')
      .include('speakers')
      .ascending('startTime')
  )

export const loadMaps = () =>
  loadParseQuery('LOADED_MAPS', new Parse.Query(Maps))

export const loadNotifications = () =>
  loadParseQuery('LOADED_NOTIFICATIONS', new Parse.Query(Notification))
