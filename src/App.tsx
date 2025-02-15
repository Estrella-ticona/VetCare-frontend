import { Navigate, Route, Routes } from "react-router"
import { AppointmentPage } from "./citas/page/AppointmentPage"
import { ClientPage } from "./clientes/page/ClientPage"
import { Login } from "./iam/components/Login"
import { Register } from "./iam/components/Register"
import { Profile } from "./profile/components/Profile"
import { MainLayout } from "./public/pages/MainLayout"
import { Historypage } from "./historial/page/Historypage"
import { InventoryPage } from "./inventory/pages/InventoryPage"

function App() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/clientes" element={<ClientPage />} />
        <Route path="/citas" element={<AppointmentPage />} />
        <Route path="/historial" element={<Historypage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Route>
    </Routes >
  )
}

export default App