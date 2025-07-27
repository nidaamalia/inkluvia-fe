import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

// Icon components
const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const FilterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
)

const BackArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const GuruDashboard = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStudent, setSelectedStudent] = useState('Klein Moretti')

  // Mock data for student schedules
  const schedules = [
    {
      id: 1,
      date: '19-07-2025',
      time: '09.00-10.00',
      material: 'Pengantar Braille',
      status: 'SELESAI'
    },
    {
      id: 2,
      date: '19-07-2025',
      time: '09.00-10.00',
      material: 'Pengantar Braille',
      status: 'BELUM MULAI'
    },
    {
      id: 3,
      date: '19-07-2025',
      time: '09.00-10.00',
      material: 'Matematika 1',
      status: 'BELUM MULAI'
    },
    {
      id: 4,
      date: '19-07-2025',
      time: '09.00-10.00',
      material: 'Tematik 1',
      status: 'BELUM MULAI'
    }
  ]

  const handleAddSchedule = () => {
    // Navigate to add schedule page or open modal
    console.log('Add schedule clicked')
  }

  const handleViewMaterial = (scheduleId) => {
    // Navigate to material view page
    console.log('View material for schedule:', scheduleId)
  }

  const filteredSchedules = schedules.filter(schedule =>
    schedule.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    schedule.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <PageLayout
      userRole="guru"
      user={{ name: 'Annisa Pratiwi', role: 'guru' }}
      showBackButton={true}
      onBackClick={() => navigate('/dashboard/guru')}
    >
      <div className="card">
        <div className="card-header">
          <div className="flex items-center space-x-2">
            <BackArrowIcon />
            <h2 className="text-lg font-semibold text-gray-900">
              Penjadwalan - {selectedStudent}
            </h2>
          </div>
        </div>

        <div className="card-body">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Jadwal Belajar
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <Button
                onClick={handleAddSchedule}
                icon={<PlusIcon />}
                className="w-full sm:w-auto"
              >
                Tambah Jadwal
              </Button>

              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <Input
                  type="text"
                  placeholder="Cari"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-10"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md p-1"
                    aria-label="Filter jadwal"
                  >
                    <FilterIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table" role="table" aria-label="Jadwal belajar siswa">
                <thead className="table-header">
                  <tr>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Jam</th>
                    <th scope="col">Materi</th>
                    <th scope="col">Status</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {filteredSchedules.map((schedule) => (
                    <tr key={schedule.id} className="table-row">
                      <td className="table-cell">{schedule.date}</td>
                      <td className="table-cell">{schedule.time}</td>
                      <td className="table-cell">{schedule.material}</td>
                      <td className="table-cell">
                        <span className={`badge ${schedule.status === 'SELESAI'
                            ? 'badge-success'
                            : 'badge-pending'
                          }`}>
                          {schedule.status}
                        </span>
                      </td>
                      <td className="table-cell">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewMaterial(schedule.id)}
                          className="text-blue-600 border-blue-300 hover:bg-blue-50"
                        >
                          LIHAT MATERI
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredSchedules.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Tidak ada jadwal yang ditemukan</p>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">
                  {filteredSchedules.length}/{schedules.length} entries
                </span>
              </div>

              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-700">Halaman:</span>
                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-600 text-white text-sm font-medium rounded">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default GuruDashboard