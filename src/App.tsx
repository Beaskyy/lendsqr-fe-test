import {Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Users from './pages/Users'
import UserInfo from './pages/UserInfo'
import ForgotPassword from './pages/ForgotPassword'
type Props = {}

const App = (props: Props) => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/' element={<Login />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserInfo />} />
      <Route path='/reset-password' element={<ForgotPassword />} />
    </Routes>
  )
}

export default App