import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

      // For demo purposes, redirect based on email
      if (formData.email.includes('guru')) {
        navigate('/dashboard/guru')
      } else if (formData.email.includes('admin')) {
        navigate('/dashboard/admin-lembaga')
      } else if (formData.email.includes('super')) {
        navigate('/dashboard/super-admin')
      } else if (formData.email.includes('content')) {
        navigate('/dashboard/content-manager')
      } else if (formData.email.includes('student')) {
        navigate('/dashboard/student')
      } else {
        navigate('/dashboard/guru') // Default to guru
      }
    } catch (error) {
      setErrors({ general: 'Terjadi kesalahan saat login' })
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
              Masuk ke Akun Anda
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

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="Masukkan password Anda"
                required
                autoComplete="current-password"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Ingat saya
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Lupa password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                {loading ? 'Memproses...' : 'Masuk'}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Atau</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-center text-sm text-gray-600">
                  Belum punya akun?{' '}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Daftar sekarang
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>Demo: Gunakan email dengan kata kunci berikut untuk login sebagai role tertentu:</p>
          <p className="mt-1">guru@example.com, admin@example.com, super@example.com, content@example.com, student@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default Login