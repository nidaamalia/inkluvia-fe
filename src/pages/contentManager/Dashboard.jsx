import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'

const ContentManagerDashboard = () => {
  return (
    <PageLayout
      userRole="contentManager"
      user={{ name: 'Content Manager', role: 'contentManager' }}
      title="Dashboard Content Manager"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Statistik Konten
            </h2>
          </div>

          <div className="card-body">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">500</div>
                <div className="text-sm text-gray-600">Total Materi</div>
              </div>

              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600">25</div>
                <div className="text-sm text-gray-600">Request Pending</div>
              </div>

              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="text-2xl font-bold text-secondary-600">15</div>
                <div className="text-sm text-gray-600">Dalam Review</div>
              </div>

              <div className="text-center p-4 bg-info-50 rounded-lg">
                <div className="text-2xl font-bold text-info-600">85%</div>
                <div className="text-sm text-gray-600">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Manajemen Konten
            </h2>
          </div>

          <div className="card-body space-y-4">
            <Button variant="primary" className="w-full">
              Kelola Materi
            </Button>

            <Button variant="secondary" className="w-full">
              Review Request
            </Button>

            <Button variant="outline" className="w-full">
              Upload Materi
            </Button>

            <Button variant="outline" className="w-full">
              Kategori Materi
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold text-gray-900">
              Request Materi Terbaru
            </h2>
          </div>

          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table" role="table" aria-label="Request materi terbaru">
                <thead className="table-header">
                  <tr>
                    <th scope="col">Guru</th>
                    <th scope="col">Materi</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row">
                    <td className="table-cell">Annisa Pratiwi</td>
                    <td className="table-cell">Pengantar Braille Lanjutan</td>
                    <td className="table-cell">Braille</td>
                    <td className="table-cell">
                      <span className="badge badge-pending">Pending</span>
                    </td>
                    <td className="table-cell">19-07-2025</td>
                    <td className="table-cell">
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="table-cell">Budi Santoso</td>
                    <td className="table-cell">Matematika Dasar untuk Tunanetra</td>
                    <td className="table-cell">Matematika</td>
                    <td className="table-cell">
                      <span className="badge badge-info">Dalam Review</span>
                    </td>
                    <td className="table-cell">18-07-2025</td>
                    <td className="table-cell">
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </td>
                  </tr>

                  <tr className="table-row">
                    <td className="table-cell">Siti Nurhaliza</td>
                    <td className="table-cell">Bahasa Indonesia Aksesibel</td>
                    <td className="table-cell">Bahasa</td>
                    <td className="table-cell">
                      <span className="badge badge-success">Disetujui</span>
                    </td>
                    <td className="table-cell">17-07-2025</td>
                    <td className="table-cell">
                      <Button variant="outline" size="sm">
                        Lihat
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default ContentManagerDashboard