# Inkluvia - Frontend Aksesibel

Platform pembelajaran inklusif untuk semua dengan fokus tinggi pada aksesibilitas (a11y).

## 🚀 Tech Stack

- **React 18** (tanpa TypeScript)
- **Tailwind CSS** dengan `@apply` untuk styling
- **Vite** sebagai build tool
- **React Router DOM** untuk routing
- **npm** untuk package management

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── layout/
│   │   ├── PageLayout.jsx      # Wrapper dengan sidebar, header, dan konten
│   │   ├── Sidebar.jsx         # Navigasi sidebar berdasarkan role
│   │   └── Header.jsx          # Header dengan judul dan info user
│   └── ui/
│       ├── Button.jsx          # Komponen tombol aksesibel
│       └── Input.jsx           # Komponen input dengan label
├── pages/
│   ├── Login.jsx               # Halaman login
│   ├── Register.jsx            # Halaman registrasi
│   ├── guru/                   # Halaman untuk role guru
│   ├── adminLembaga/           # Halaman untuk admin lembaga
│   ├── superadmin/             # Halaman untuk super admin
│   ├── contentManager/         # Halaman untuk content manager
│   └── student/                # Halaman untuk siswa
├── router/
│   └── AppRouter.jsx           # Konfigurasi routing
├── theme/
│   └── colors.js               # Definisi tema warna
├── styles/
│   └── index.css               # Tailwind + CSS tambahan
├── App.jsx
└── main.jsx
```

## 🎨 Tema Warna

Proyek menggunakan sistem tema warna yang terpusat di `src/theme/colors.js`:

- **Primary**: Ungu gelap (#5b21b6) - Warna utama aplikasi
- **Secondary**: Ungu muda - Untuk highlight dan aksen
- **Accent**: Hijau (#22c55e) - Untuk status sukses
- **Danger**: Merah (#ef4444) - Untuk error dan warning
- **Info**: Biru (#3b82f6) - Untuk informasi

## 🧑‍🦯 Aksesibilitas (a11y)

Proyek ini mengikuti standar WCAG 2.1 dengan fitur:

- **Semantic HTML**: Menggunakan tag yang tepat (`nav`, `header`, `main`, dll)
- **Keyboard Navigation**: Semua elemen interaktif dapat diakses via keyboard
- **Screen Reader Support**: Label yang tepat, ARIA attributes
- **Focus Management**: Focus ring yang jelas dan konsisten
- **Color Contrast**: Kontras warna yang memadai
- **Skip Links**: Link untuk skip ke konten utama
- **Reduced Motion**: Support untuk preferensi reduced motion

## 🚀 Instalasi & Setup

### Prerequisites

- Node.js (versi 16 atau lebih baru)
- npm

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd inkluvia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

### Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Linting dengan ESLint

## 👥 Role Pengguna

### Demo Login

Untuk testing, gunakan email dengan kata kunci berikut:

- **Guru**: `guru@example.com` → `/dashboard/guru`
- **Admin Lembaga**: `admin@example.com` → `/dashboard/admin-lembaga`
- **Super Admin**: `super@example.com` → `/dashboard/super-admin`
- **Content Manager**: `content@example.com` → `/dashboard/content-manager`
- **Siswa**: `student@example.com` → `/dashboard/student`

Password: `password123` (untuk semua akun demo)

## 🛣️ Routing

- `/login` - Halaman login
- `/register` - Halaman registrasi
- `/dashboard/guru` - Dashboard guru
- `/dashboard/guru/materi` - Halaman materi guru
- `/dashboard/admin-lembaga` - Dashboard admin lembaga
- `/dashboard/super-admin` - Dashboard super admin
- `/dashboard/content-manager` - Dashboard content manager
- `/dashboard/student` - Dashboard siswa

## 🧱 Komponen

### Layout Components

- **PageLayout**: Wrapper utama dengan sidebar, header, dan konten
- **Sidebar**: Navigasi berdasarkan role pengguna
- **Header**: Header dengan judul halaman dan info user

### UI Components

- **Button**: Tombol dengan berbagai variant dan state
- **Input**: Input field dengan label dan validasi

### Styling

Menggunakan Tailwind CSS dengan `@apply` untuk konsistensi:

```css
.btn {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
}
```

## 🔧 Konfigurasi

### Tailwind Config

Warna tema diimport dari `src/theme/colors.js`:

```javascript
const { colors } = require('./src/theme/colors.js')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        // ...
      }
    }
  }
}
```

### Vite Config

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

## 📱 Responsive Design

Proyek menggunakan Tailwind CSS breakpoints:

- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 🧪 Testing

Untuk menjalankan tests (jika ada):

```bash
npm test
```

## 📦 Build

Untuk build production:

```bash
npm run build
```

Build akan tersimpan di folder `dist/`.

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

Untuk pertanyaan atau dukungan, silakan buat issue di repository ini.

---

**Inkluvia** - Platform pembelajaran inklusif untuk semua 🎓