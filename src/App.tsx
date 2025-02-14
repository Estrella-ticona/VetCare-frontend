import { Navigate, Route, Routes } from "react-router"
import { Login } from "./iam/components/Login"
import { Register } from "./iam/components/Register"
import { Profile } from "./profile/components/Profile"
import { MainLayout } from "./public/pages/MainLayout"
import { Pageappointment } from "./citas/page/Pageappointment"
import { Pageclient } from "./clientes/page/pageclient"
import { HistoryTable } from "./historial/components/historyTable"
function App() {
  return (

    <Routes>
      <Route path="" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/clientes" element={<Pageclient />} />
        <Route path="/citas" element={<Pageappointment />} />
        <Route path="/historial" element={<HistoryTable />} />

      </Route>

    </Routes >

  )
}

export default App
