import React from 'react'
import { Navigator } from 'react-native'
import routes from './routes'

const App = () => {
  const renderScene = (route, navigator) => {
    const routeConfig = routes[route.to]
    if (!routeConfig) return navigator.pop()
    const currentRoute = { ...routeConfig, ...route }
    return <currentRoute.component {...currentRoute} navigator={navigator} />
  }

  const configureScene = (route) => {
    const currentRoute = { ...(routes[route.to] || {}), ...route }
    const { scene = 'PushFromRight' } = currentRoute
    return Navigator.SceneConfigs[scene]
  }

  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{ to: 'Grid' }}
      configureScene={configureScene}
      renderScene={renderScene}
    />
  )
}

export default App
