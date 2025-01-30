import { Login } from "./iam/components/Login"
import { Register } from "./iam/components/Register"
import { Profile } from "./profile/components/Profile"
import { Navbar } from "./public/components/Navbar"
import { MainLayout } from "./public/pages/MainLayout"
import { Route, Routes } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/*"
        element={
          <MainLayout>
            <Navbar />
            <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  )
}

export default App
