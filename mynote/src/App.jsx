import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Edit from "./pages/Edit"
import ProtectedRoute from "./components/ProtectedRoute"
function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path="/logout" element={<Logout />} />
          
          <Route path="*" element={<NotFound />}></Route>
          <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
