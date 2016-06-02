import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from '../middleware/promise'
import array from '../middleware/array'
import createLogger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reducers from '../reducers'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
})

const createAppStore = applyMiddleware(thunk, promise, array, logger)(createStore)

export default function configureStore(onComplete: ?() => void) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createAppStore)(reducers)
  persistStore(store, { storage: AsyncStorage }, onComplete)
  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}
