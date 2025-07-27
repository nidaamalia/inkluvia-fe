import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'

const AdminLembagaDashboard = () => {
  return (
    <PageLayout
      userRole="adminLembaga"
      user={{ name: 'Admin Lembaga', role: 'adminLembaga' }}
      title="Dashboard Admin Lembaga"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Statistik Lembaga
            </h2>
          </div>

          <div className="card-body">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">25</div>
                <div className="text-sm text-gray-600">Total Guru</div>
              </div>

              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600">150</div>
                <div className="text-sm text-gray-600">Total Siswa</div>
              </div>

              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600">12</div>
                <div className="text-sm text-gray-600">Kelas Aktif</div>
              </div>

              <div className="text-center p-4 bg-info-50 rounded-lg">
                <div className="text-2xl font-bold text-info-600">85%</div>
                <div className="text-sm text-gray-600">Kehadiran</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Aksi Cepat
            </h2>
          </div>

          <div className="card-body space-y-4">
            <Button variant="primary" className="w-full">
              Kelola Guru
            </Button>

            <Button variant="secondary" className="w-full">
              Kelola Siswa
            </Button>

            <Button variant="outline" className="w-full">
              Laporan Kehadiran
            </Button>

            <Button variant="outline" className="w-full">
              Pengaturan Lembaga
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Aktivitas Terbaru
            </h2>
          </div>

          <div className="card-body">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Guru baru bergabung: Siti Nurhaliza
                  </p>
                  <p className="text-xs text-gray-500">2 jam yang lalu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Siswa baru mendaftar: Ahmad Fadillah
                  </p>
                  <p className="text-xs text-gray-500">4 jam yang lalu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Laporan kehadiran bulanan telah selesai
                  </p>
                  <p className="text-xs text-gray-500">1 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AdminLembagaDashboard