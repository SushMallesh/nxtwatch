import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'

import NotFound from './components/NotFound'

import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  render() {
    const {isDarkTheme} = this.state

    return (
      <NxtWatchContext.Provider value={{isDarkTheme}}>
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
