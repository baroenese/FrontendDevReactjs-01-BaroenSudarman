## FrontendDevReactjs-01-BaroenSudarman

## Informasi perangkat lunak dan library

- Node js v18 (LTS) [Download](https://nodejs.org/en/download)
- NextJs v14 [Docs](https://nextjs.org/)
- swr v2 [Docs](https://swr.vercel.app/)
- zod v3 [Docs](https://zod.dev/)

Aplikasi ini di hosting pada vercel
[Test demo app](https://frontend-dev-reactjs-01-baroen-sudarman.vercel.app/)

## Cara menjalankan pada local
```
# clone and install aplikasi
# jalanklan perintah
npm run dev

# aplikasi berjalan pada port 🥳
```

## Cara menjalankan pada hosting mandiri (selfhost)

Ubah konfigurasi pada file next.config
kemudian tambah baris perintah pada next config berikut ini

```
const nextConfig = {
    output: "standalone"
}
```

Build aplikasi menggunakan perintah berikut
```
# clone and install aplikasi
# jalanklan perintah
npm run build

# tunggun sampe build sukses 😎
```
