import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'

const StudentDashboard = () => {
  return (
    <PageLayout
      userRole="student"
      user={{ name: 'Klein Moretti', role: 'student' }}
      title="Dashboard Siswa"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Progress Belajar
            </h2>
          </div>

          <div className="card-body">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">75%</div>
                <div className="text-sm text-gray-600">Progress Umum</div>
              </div>

              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600">12</div>
                <div className="text-sm text-gray-600">Materi Selesai</div>
              </div>

              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600">4</div>
                <div className="text-sm text-gray-600">Materi Aktif</div>
              </div>

              <div className="text-center p-4 bg-info-50 rounded-lg">
                <div className="text-2xl font-bold text-info-600">8</div>
                <div className="text-sm text-gray-600">Quiz Selesai</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Materi Belajar
            </h2>
          </div>

          <div className="card-body space-y-4">
            <Button variant="primary" className="w-full">
              Lanjutkan Belajar
            </Button>

            <Button variant="secondary" className="w-full">
              Lihat Perpustakaan
            </Button>

            <Button variant="outline" className="w-full">
              Riwayat Belajar
            </Button>

            <Button variant="outline" className="w-full">
              Sertifikat
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Jadwal Belajar Hari Ini
            </h2>
          </div>

          <div className="card-body">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-accent-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">Pengantar Braille</h3>
                    <p className="text-sm text-gray-600">09.00 - 10.00</p>
                  </div>
                </div>
                <Button variant="success" size="sm">
                  Mulai
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">Matematika 1</h3>
                    <p className="text-sm text-gray-600">10.30 - 11.30</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Belum waktunya</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">Tematik 1</h3>
                    <p className="text-sm text-gray-600">13.00 - 14.00</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Belum waktunya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Materi Terbaru
            </h2>
          </div>

          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Pengantar Braille Lanjutan</h3>
                <p className="text-sm text-gray-600 mb-3">Materi lanjutan untuk pengembangan keterampilan braille</p>
                <Button variant="outline" size="sm" className="w-full">
                  Mulai Belajar
                </Button>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Matematika Dasar</h3>
                <p className="text-sm text-gray-600 mb-3">Konsep matematika dasar dengan pendekatan aksesibel</p>
                <Button variant="outline" size="sm" className="w-full">
                  Mulai Belajar
                </Button>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Bahasa Indonesia</h3>
                <p className="text-sm text-gray-600 mb-3">Pembelajaran bahasa Indonesia yang inklusif</p>
                <Button variant="outline" size="sm" className="w-full">
                  Mulai Belajar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default StudentDashboard