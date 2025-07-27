import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Auth pages
import Login from '../pages/Login'
import Register from '../pages/Register'

// Guru (Teacher) pages
import GuruDashboard from '../pages/guru/Dashboard'
import GuruMateri from '../pages/guru/Materi'

// Admin Lembaga pages
import AdminLembagaDashboard from '../pages/adminLembaga/Dashboard'

// Super Admin pages
import SuperAdminDashboard from '../pages/superadmin/Dashboard'

// Content Manager pages
import ContentManagerDashboard from '../pages/contentManager/Dashboard'

// Student pages
import StudentDashboard from '../pages/student/Dashboard'

function AppRouter() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Guru routes */}
      <Route path="/dashboard/guru" element={<GuruDashboard />} />
      <Route path="/dashboard/guru/materi" element={<GuruMateri />} />

      {/* Admin Lembaga routes */}
      <Route path="/dashboard/admin-lembaga" element={<AdminLembagaDashboard />} />

      {/* Super Admin routes */}
      <Route path="/dashboard/super-admin" element={<SuperAdminDashboard />} />

      {/* Content Manager routes */}
      <Route path="/dashboard/content-manager" element={<ContentManagerDashboard />} />

      {/* Student routes */}
      <Route path="/dashboard/student" element={<StudentDashboard />} />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter