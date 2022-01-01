import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import './styles/basic.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component='' />
        <Route path='/rent/:id?' component='' />
        <Route path='/jobs/:id?' component='' />
        <Route path='/places/:id?' component='' />
        <Route path='/services/:id?' component='' />
        <Route path='/news/:id?' component='' />
        <Route path='/relocate/:id?' component='' />
      </Switch>
    </>
  )
}

export default App
