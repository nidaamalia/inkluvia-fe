import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// Icon components
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
  </svg>
)

const StudentsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const MaterialIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const LibraryIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Sidebar = ({ userRole = 'guru' }) => {
  const location = useLocation()

  // Navigation items based on user role
  const getNavigationItems = () => {
    switch (userRole) {
      case 'guru':
        return [
          {
            name: 'Dashboard',
            href: '/dashboard/guru',
            icon: DashboardIcon,
            current: location.pathname === '/dashboard/guru'
          },
          {
            name: 'Daftar Murid',
            href: '/dashboard/guru/daftar-murid',
            icon: StudentsIcon,
            current: location.pathname.includes('/daftar-murid')
          },
          {
            name: 'Request Materi',
            href: '/dashboard/guru/request-materi',
            icon: MaterialIcon,
            current: location.pathname.includes('/request-materi')
          },
          {
            name: 'Perpustakaan',
            href: '/dashboard/guru/perpustakaan',
            icon: LibraryIcon,
            current: location.pathname.includes('/perpustakaan')
          }
        ]

      case 'adminLembaga':
        return [
          {
            name: 'Dashboard',
            href: '/dashboard/admin-lembaga',
            icon: DashboardIcon,
            current: location.pathname === '/dashboard/admin-lembaga'
          },
          {
            name: 'Kelola Guru',
            href: '/dashboard/admin-lembaga/guru',
            icon: StudentsIcon,
            current: location.pathname.includes('/guru')
          },
          {
            name: 'Kelola Siswa',
            href: '/dashboard/admin-lembaga/siswa',
            icon: StudentsIcon,
            current: location.pathname.includes('/siswa')
          }
        ]

      case 'superadmin':
        return [
          {
            name: 'Dashboard',
            href: '/dashboard/super-admin',
            icon: DashboardIcon,
            current: location.pathname === '/dashboard/super-admin'
          },
          {
            name: 'Kelola Lembaga',
            href: '/dashboard/super-admin/lembaga',
            icon: LibraryIcon,
            current: location.pathname.includes('/lembaga')
          },
          {
            name: 'Pengaturan',
            href: '/dashboard/super-admin/settings',
            icon: SettingsIcon,
            current: location.pathname.includes('/settings')
          }
        ]

      case 'contentManager':
        return [
          {
            name: 'Dashboard',
            href: '/dashboard/content-manager',
            icon: DashboardIcon,
            current: location.pathname === '/dashboard/content-manager'
          },
          {
            name: 'Kelola Materi',
            href: '/dashboard/content-manager/materi',
            icon: MaterialIcon,
            current: location.pathname.includes('/materi')
          },
          {
            name: 'Perpustakaan',
            href: '/dashboard/content-manager/perpustakaan',
            icon: LibraryIcon,
            current: location.pathname.includes('/perpustakaan')
          }
        ]

      case 'student':
        return [
          {
            name: 'Dashboard',
            href: '/dashboard/student',
            icon: DashboardIcon,
            current: location.pathname === '/dashboard/student'
          },
          {
            name: 'Materi Belajar',
            href: '/dashboard/student/materi',
            icon: MaterialIcon,
            current: location.pathname.includes('/materi')
          },
          {
            name: 'Perpustakaan',
            href: '/dashboard/student/perpustakaan',
            icon: LibraryIcon,
            current: location.pathname.includes('/perpustakaan')
          }
        ]

      default:
        return []
    }
  }

  const navigationItems = getNavigationItems()
  const roleTitle = userRole === 'guru' ? 'Guru' :
    userRole === 'adminLembaga' ? 'Admin Lembaga' :
      userRole === 'superadmin' ? 'Super Admin' :
        userRole === 'contentManager' ? 'Content Manager' :
          userRole === 'student' ? 'Siswa' : 'Inkluvia'

  return (
    <nav className="sidebar" aria-label="Main navigation" role="navigation">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-white" id="sidebar-title">
          {roleTitle}
        </h1>
      </div>

      <div className="sidebar-nav">
        <ul className="space-y-2" role="list" aria-labelledby="sidebar-title">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name} role="listitem">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive || item.current ? 'active' : ''}`
                  }
                  aria-current={item.current ? 'page' : undefined}
                  aria-label={`${item.name}${item.current ? ' (halaman aktif)' : ''}`}
                >
                  <Icon />
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar