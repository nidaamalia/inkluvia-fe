import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const PageLayout = ({
  children,
  userRole = 'guru',
  user = { name: 'Annisa Pratiwi', role: 'guru' },
  title,
  showBackButton = false,
  onBackClick,
  className = ''
}) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar userRole={userRole} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          title={title}
          showBackButton={showBackButton}
          onBackClick={onBackClick}
          user={user}
        />

        {/* Main content */}
        <main
          id="main-content"
          className={`main-content flex-1 overflow-auto ${className}`}
          role="main"
          tabIndex="-1"
        >
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default PageLayout