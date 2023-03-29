import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout } from "./layout/AuthLayout"
import { Layout } from "./layout/Layout"
import { Login } from "./pages/Auth/Login"
import { ManageProjects } from "./pages/Project/ManageProjects"
import { ManageSkills } from "./pages/Skill/ManageSkills"
import { ManageTecnologies } from "./pages/Tecnology/ManageTecnologies"
import { ManageUsers } from "./pages/User/ManageUsers"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/projects" element={<Layout />}>
          <Route index element={<ManageProjects />} />
        </Route>

        <Route path="/skills" element={<Layout />}>
          <Route index element={<ManageSkills />} />
        </Route>

        <Route path="/tecnologies" element={<Layout />}>
          <Route index element={<ManageTecnologies />} />
        </Route>

        <Route path="/users" element={<Layout />}>
          <Route index element={<ManageUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
