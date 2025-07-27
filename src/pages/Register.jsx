import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = 'Nama wajib diisi'
    }

    if (!formData.email) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    if (!formData.password) {
      newErrors.password = 'Password wajib diisi'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password wajib diisi'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Redirect to login page after successful registration
      navigate('/login', {
        state: { message: 'Registrasi berhasil! Silakan login dengan akun Anda.' }
      })
    } catch (error) {
      setErrors({ general: 'Terjadi kesalahan saat registrasi' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Inkluvia
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Platform pembelajaran inklusif untuk semua
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-center text-xl font-semibold text-gray-900">
              Daftar Akun Baru
            </h2>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errors.general && (
                <div className="bg-danger-50 border border-danger-200 text-danger-700 px-4 py-3 rounded-md" role="alert">
                  {errors.general}
                </div>
              )}

              <Input
                label="Nama Lengkap"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Masukkan nama lengkap Anda"
                required
                autoComplete="name"
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Masukkan email Anda"
                required
                autoComplete="email"
              />

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="student">Siswa</option>
                  <option value="guru">Guru</option>
                  <option value="adminLembaga">Admin Lembaga</option>
                  <option value="contentManager">Content Manager</option>
                </select>
              </div>

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="Masukkan password Anda"
                required
                autoComplete="new-password"
              />

              <Input
                label="Konfirmasi Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                placeholder="Konfirmasi password Anda"
                required
                autoComplete="new-password"
              />

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Saya setuju dengan{' '}
                  <Link
                    to="/terms"
                    className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Syarat dan Ketentuan
                  </Link>
                  {' '}dan{' '}
                  <Link
                    to="/privacy"
                    className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Kebijakan Privasi
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                {loading ? 'Memproses...' : 'Daftar'}
              </Button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Sudah punya akun?{' '}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register