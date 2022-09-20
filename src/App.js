import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/LoginForm'

const App = () => (
  <>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </>
)

export default App
