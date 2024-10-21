import { Navigate, Outlet } from "react-router-dom"
import UserDashboardLayout from "../../layout/UserDashboard.layout"

function AuthRoute() {
  const token = localStorage.getItem('token')

  if (token !== null) {
    return (
      <UserDashboardLayout>
        <Outlet />
      </UserDashboardLayout>
    )
  } else {
    <Navigate to="/login" />
  }
}

export default AuthRoute