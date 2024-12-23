# Backend Serverless

Project backend serverless yang siap di-deploy ke Vercel. Project ini menggunakan Express.js sebagai framework dan MongoDB sebagai database.

## Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB & Mongoose
- Swagger UI untuk dokumentasi API
- CORS
- UUID

## Struktur Project

```
├── config/         # Konfigurasi database dan lainnya
├── controllers/    # Logic untuk handling request
├── middleware/     # Express middleware
├── models/        # Model database MongoDB
├── routes/        # Definisi routing API
├── swagger/       # Dokumentasi API Swagger
└── index.js       # Entry point aplikasi
```

## Cara Penggunaan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Build dan deploy ke Vercel:
```bash
vercel
```

## API Documentation

Dokumentasi API tersedia melalui Swagger UI di endpoint `/api-docs` ketika server berjalan.

## Environment Variables

Buat file `.env` dengan variabel berikut:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

## Scripts

- `npm run dev`: Menjalankan server dalam mode development dengan nodemon
- `npm start`: Menjalankan server dalam mode production

## Fitur

- REST API dengan Express.js
- Database MongoDB dengan Mongoose ODM
- Auto-dokumentasi API dengan Swagger
- CORS enabled
- Deployment-ready untuk Vercel

## Deployment

Project ini dikonfigurasi untuk deployment di Vercel. File `vercel.json` sudah disediakan dengan konfigurasi yang sesuai.
