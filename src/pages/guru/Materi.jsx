import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'

const GuruMateri = () => {
  return (
    <PageLayout
      userRole="guru"
      user={{ name: 'Annisa Pratiwi', role: 'guru' }}
      title="Request Materi"
    >
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-semibold text-gray-900">
            Request Materi
          </h2>
        </div>

        <div className="card-body">
          <p className="text-gray-600 mb-6">
            Halaman untuk mengelola dan meminta materi pembelajaran.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Materi Tersedia
                </h3>
                <p className="text-gray-600 mb-4">
                  Lihat materi yang sudah tersedia di perpustakaan.
                </p>
                <Button variant="primary" className="w-full">
                  Lihat Materi
                </Button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Request Baru
                </h3>
                <p className="text-gray-600 mb-4">
                  Buat permintaan materi baru untuk kebutuhan pembelajaran.
                </p>
                <Button variant="secondary" className="w-full">
                  Buat Request
                </Button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Status Request
                </h3>
                <p className="text-gray-600 mb-4">
                  Pantau status permintaan materi yang telah diajukan.
                </p>
                <Button variant="outline" className="w-full">
                  Lihat Status
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default GuruMateri