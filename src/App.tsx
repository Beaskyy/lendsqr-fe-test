import {Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import Users from './pages/Users'
import UserInfo from './pages/UserInfo'
type Props = {}

const App = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserInfo />} />
    </Routes>
  )
}

export default App