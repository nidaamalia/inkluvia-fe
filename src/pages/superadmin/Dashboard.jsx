import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'

const SuperAdminDashboard = () => {
  return (
    <PageLayout
      userRole="superadmin"
      user={{ name: 'Super Admin', role: 'superadmin' }}
      title="Dashboard Super Admin"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Statistik Sistem
            </h2>
          </div>

          <div className="card-body">
            <div className="space-y-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">15</div>
                <div className="text-sm text-gray-600">Total Lembaga</div>
              </div>

              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600">250</div>
                <div className="text-sm text-gray-600">Total Guru</div>
              </div>

              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600">1,500</div>
                <div className="text-sm text-gray-600">Total Siswa</div>
              </div>

              <div className="text-center p-4 bg-info-50 rounded-lg">
                <div className="text-2xl font-bold text-info-600">500</div>
                <div className="text-sm text-gray-600">Total Materi</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Manajemen Sistem
            </h2>
          </div>

          <div className="card-body space-y-4">
            <Button variant="primary" className="w-full">
              Kelola Lembaga
            </Button>

            <Button variant="secondary" className="w-full">
              Kelola User
            </Button>

            <Button variant="outline" className="w-full">
              Backup Database
            </Button>

            <Button variant="outline" className="w-full">
              Log Sistem
            </Button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Pengaturan
            </h2>
          </div>

          <div className="card-body space-y-4">
            <Button variant="outline" className="w-full">
              Konfigurasi Sistem
            </Button>

            <Button variant="outline" className="w-full">
              Manajemen Role
            </Button>

            <Button variant="outline" className="w-full">
              Backup & Restore
            </Button>

            <Button variant="outline" className="w-full">
              Monitoring
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Aktivitas Sistem
            </h2>
          </div>

          <div className="card-body">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Lembaga baru terdaftar: SLB Negeri 1 Jakarta
                  </p>
                  <p className="text-xs text-gray-500">1 jam yang lalu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Backup database otomatis berhasil
                  </p>
                  <p className="text-xs text-gray-500">3 jam yang lalu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Update sistem v2.1.0 selesai
                  </p>
                  <p className="text-xs text-gray-500">6 jam yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default SuperAdminDashboard