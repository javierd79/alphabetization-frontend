import './App.css'
import AuthRoute from './components/AuthRoute/AuthRoute'
import AdminDasboard from './pages/AdminDasboard'
import Contact from './pages/Contact'
import History from './pages/History'
import Login from './pages/Login'
import Register from './pages/Register'
import Reports from './pages/Reports'
import UsersDashboard from './pages/UsersDashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route index element={<Login />} /> 
      <Route path='login' element={<Login />} /> 
      <Route path='create-your-account' element={<Register />} /> 
      <Route path='admin' element={<AuthRoute />}>
        <Route path="reports" element={<Reports />} />
        <Route index element={<AdminDasboard />} />
      </Route>
      <Route path='dashboard' element={<AuthRoute />}>
        <Route path='payment-history' element={<History />} /> 
        <Route path='contact' element={<Contact />} /> 
        <Route index element={<UsersDashboard />} />
      </Route> 
    </Routes>
  )
}

export default App
