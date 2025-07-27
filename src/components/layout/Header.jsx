import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Icon components
const BackArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const Header = ({
  title,
  showBackButton = false,
  onBackClick,
  user = { name: 'Annisa Pratiwi', role: 'guru' },
  className = ''
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick()
    } else {
      navigate(-1)
    }
  }

  // Get page title based on current location if not provided
  const getPageTitle = () => {
    if (title) return title

    const path = location.pathname
    if (path.includes('/daftar-murid')) return 'Daftar Murid'
    if (path.includes('/request-materi')) return 'Request Materi'
    if (path.includes('/perpustakaan')) return 'Perpustakaan'
    if (path.includes('/materi')) return 'Materi'
    if (path.includes('/dashboard')) return 'Dashboard'

    return 'Inkluvia'
  }

  return (
    <header className={`header ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <button
              onClick={handleBackClick}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Kembali ke halaman sebelumnya"
            >
              <BackArrowIcon />
            </button>
          )}

          <h1 className="text-xl font-semibold text-gray-900">
            {getPageTitle()}
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {user.role === 'guru' ? 'Guru' :
                user.role === 'adminLembaga' ? 'Admin Lembaga' :
                  user.role === 'superadmin' ? 'Super Admin' :
                    user.role === 'contentManager' ? 'Content Manager' :
                      user.role === 'student' ? 'Siswa' : user.role}
            </p>
          </div>

          <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full">
            <UserIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header