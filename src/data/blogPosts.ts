import sigra from '../assets/sigra.png'
import bmw from '../assets/bmw.png'
import alphard from '../assets/alphard.png'
import bydSeal from '../assets/byd_seal.png'
import heroCar from '../assets/Car.webp'

export interface Post {
  slug: string
  category: string
  title: string
  excerpt?: string
  content: string[]
  author: string
  date: string
  image: string
}

export const CATEGORIES = ['Semua', 'Panduan Sewa', 'Tips Berkendara', 'Perawatan Mobil', 'Rekomendasi', 'Berita']

export const ALL_POSTS: Post[] = [
  {
    slug: 'tips-nyaman-berkendara-untuk-perjalanan-jarak-jauh',
    category: 'Tips Berkendara',
    title: 'Tips Nyaman Berkendara untuk Perjalanan Jarak Jauh',
    content: [
      'Perjalanan jarak jauh butuh persiapan lebih dari sekadar mengisi bensin. Kondisi tubuh dan mobil yang prima akan membuat perjalanan terasa jauh lebih nyaman dan aman.',
      'Atur posisi duduk dan kaca spion sebelum berangkat, dan pastikan kamu cukup istirahat malam sebelumnya. Hindari mengemudi lebih dari dua jam tanpa jeda, berhentilah sejenak di rest area untuk meregangkan badan.',
      'Siapkan juga playlist atau podcast favorit agar tetap fokus dan tidak mudah mengantuk, serta selalu sedia air minum dan camilan ringan di dalam mobil.',
      'Terakhir, cek rute perjalanan dan kondisi lalu lintas terkini sebelum berangkat agar kamu bisa memperkirakan waktu tempuh dengan lebih akurat.',
    ],
    author: 'Admin Crown Car',
    date: '24 Jul 2026',
    image: heroCar,
  },
  {
    slug: 'etika-berkendara-di-jalan-tol-wajib-tahu-sebelum-road-trip',
    category: 'Tips Berkendara',
    title: 'Etika Berkendara di Jalan Tol: Wajib Tahu Sebelum Road Trip',
    content: [
      'Berkendara di jalan tol punya aturan tak tertulis yang penting dipahami setiap pengemudi, terutama sebelum melakukan perjalanan jauh. Kecepatan tinggi membuat kesalahan kecil bisa berakibat fatal.',
      'Selalu gunakan lajur kanan hanya untuk menyalip, lalu kembali ke lajur kiri setelahnya. Jaga jarak aman dengan kendaraan di depan, terutama saat cuaca hujan atau kondisi jalan basah.',
      'Nyalakan lampu sein jauh-jauh hari sebelum berpindah lajur, dan hindari menggunakan ponsel saat mengemudi. Jika merasa lelah, segera berhenti di rest area terdekat untuk beristirahat.',
    ],
    author: 'Admin Crown Car',
    date: '20 Jul 2026',
    image: bmw,
  },
  {
    slug: '5-kebiasaan-sederhana-agar-mobil-rental-tetap-prima',
    category: 'Perawatan Mobil',
    title: '5 Kebiasaan Sederhana agar Mobil Rental Tetap Prima',
    content: [
      'Mobil rental dipakai oleh banyak orang dengan gaya berkendara yang berbeda-beda, sehingga perawatan rutin jadi kunci agar kendaraan tetap nyaman digunakan.',
      'Beberapa kebiasaan sederhana yang bisa diterapkan antara lain: memeriksa tekanan angin ban secara berkala, membersihkan interior setelah digunakan, dan tidak membiarkan tangki bahan bakar kosong dalam waktu lama.',
      'Selain itu, laporkan segera jika ada kejanggalan pada mesin atau sistem kelistrikan agar bisa langsung diperiksa oleh teknisi sebelum masalah menjadi lebih besar.',
    ],
    author: 'Admin Crown Car',
    date: '18 Jul 2026',
    image: alphard,
  },
  {
    slug: 'cara-menjaga-fokus-dan-konsentrasi-saat-menyetir',
    category: 'Tips Berkendara',
    title: 'Cara Menjaga Fokus dan Konsentrasi Saat Menyetir',
    excerpt: 'Kehilangan fokus sedetik saja bisa berakibat fatal, ini cara menjaganya tetap prima.',
    content: [
      'Kehilangan fokus sedetik saja bisa berakibat fatal di jalan raya, apalagi saat melewati jalur padat atau kondisi cuaca buruk.',
      'Simpan ponsel di tempat yang tidak mudah dijangkau saat mengemudi, dan gunakan mode hands-free jika harus menerima panggilan penting. Atur suhu kabin senyaman mungkin agar tidak mudah lelah atau mengantuk.',
      'Jika mulai merasa ngantuk atau sulit berkonsentrasi, segera menepi dan istirahat sejenak. Jangan memaksakan diri, keselamatan selalu lebih penting daripada kecepatan sampai tujuan.',
    ],
    author: 'Dimas Prasetyo',
    date: '15 Jul 2026',
    image: sigra,
  },
  {
    slug: 'mobil-keluarga-vs-mobil-wedding-mana-yang-cocok-untuk-acaramu',
    category: 'Rekomendasi',
    title: 'Mobil Keluarga vs Mobil Wedding: Mana yang Cocok untuk Acaramu?',
    excerpt: 'Kenali perbedaan kebutuhan sebelum memilih armada untuk acara spesialmu.',
    content: [
      'Kenali perbedaan kebutuhan sebelum memilih armada untuk acara spesialmu, karena setiap jenis mobil punya keunggulan yang berbeda tergantung acaranya.',
      'Untuk acara keluarga seperti liburan atau kumpul keluarga besar, MPV dengan kapasitas penumpang banyak dan bagasi luas jadi pilihan paling praktis. Sementara untuk acara formal seperti pernikahan, sedan mewah dengan tampilan elegan akan memberi kesan lebih berkelas di foto maupun perjalanan menuju venue.',
      'Pertimbangkan juga jumlah tamu yang perlu diangkut dan durasi pemakaian agar armada yang dipilih benar-benar sesuai kebutuhan acaramu.',
    ],
    author: 'Siti Aminah',
    date: '12 Jul 2026',
    image: bmw,
  },
  {
    slug: 'cara-aman-berkendara-saat-musim-hujan-di-jakarta',
    category: 'Tips Berkendara',
    title: 'Cara Aman Berkendara Saat Musim Hujan di Jakarta',
    excerpt: 'Jalanan licin dan genangan air jadi tantangan tersendiri, ini tips amannya.',
    content: [
      'Jalanan licin dan genangan air jadi tantangan tersendiri saat musim hujan, sehingga pengemudi perlu ekstra hati-hati agar perjalanan tetap aman.',
      'Kurangi kecepatan dan jaga jarak aman lebih jauh dari biasanya, karena jarak pengereman akan lebih panjang di jalan basah. Hindari melintasi genangan air yang terlalu dalam untuk mencegah air masuk ke mesin.',
      'Pastikan juga wiper dan lampu kendaraan berfungsi dengan baik agar visibilitas tetap terjaga saat hujan deras.',
    ],
    author: 'Rendy Kurniawan',
    date: '10 Jul 2026',
    image: alphard,
  },
  {
    slug: 'kapan-waktu-yang-tepat-untuk-servis-mobil-rental',
    category: 'Perawatan Mobil',
    title: 'Kapan Waktu yang Tepat untuk Servis Mobil Rental?',
    excerpt: 'Jangan tunggu rusak, kenali jadwal servis ideal untuk kendaraan yang sering dipakai.',
    content: [
      'Jangan tunggu rusak, kenali jadwal servis ideal untuk kendaraan yang sering dipakai agar performa mobil tetap terjaga dalam jangka panjang.',
      'Umumnya, servis berkala dilakukan setiap 5.000 hingga 10.000 kilometer atau setiap tiga bulan sekali, tergantung intensitas pemakaian. Untuk armada rental yang dipakai lebih sering, interval servis bisa dipersingkat demi menjaga keandalan mesin.',
      'Selain servis rutin, lakukan pengecekan harian sederhana seperti oli, air radiator, dan tekanan ban sebelum kendaraan disewakan kembali.',
    ],
    author: 'Admin Crown Car',
    date: '08 Jul 2026',
    image: bydSeal,
  },
  {
    slug: 'tren-mobil-listrik-di-indonesia-tahun-ini',
    category: 'Berita',
    title: 'Tren Mobil Listrik di Indonesia Tahun Ini',
    excerpt: 'Semakin banyak peminat, begini perkembangan adopsi mobil listrik di Tanah Air.',
    content: [
      'Semakin banyak peminat, begini perkembangan adopsi mobil listrik di Tanah Air yang terus meningkat setiap tahunnya.',
      'Insentif pemerintah, harga yang semakin kompetitif, serta bertambahnya stasiun pengisian daya membuat mobil listrik jadi pilihan yang semakin realistis untuk penggunaan sehari-hari, termasuk untuk armada rental.',
      'Beberapa produsen juga mulai menghadirkan model dengan jarak tempuh lebih jauh dan waktu pengisian yang lebih singkat, menjawab kekhawatiran konsumen soal keterbatasan mobil listrik sebelumnya.',
    ],
    author: 'Admin Crown Car',
    date: '05 Jul 2026',
    image: bydSeal,
  },
  {
    slug: 'sewa-mobil-lepas-kunci-vs-dengan-sopir-pilih-mana',
    category: 'Panduan Sewa',
    title: 'Sewa Mobil Lepas Kunci vs Dengan Sopir, Pilih Mana?',
    excerpt: 'Kenali kelebihan dan kekurangan masing-masing sebelum memutuskan.',
    content: [
      'Kenali kelebihan dan kekurangan masing-masing sebelum memutuskan antara sewa lepas kunci atau dengan sopir, karena keduanya cocok untuk situasi yang berbeda.',
      'Sewa lepas kunci memberi kebebasan penuh untuk mengatur rute dan waktu perjalanan sendiri, cocok untuk kamu yang sudah familiar dengan jalanan Jakarta. Sementara sewa dengan sopir lebih praktis untuk acara formal atau perjalanan jauh, karena kamu bisa fokus beristirahat tanpa perlu mengemudi.',
      'Pertimbangkan juga faktor biaya, karena sewa dengan sopir umumnya memiliki tarif tambahan dibanding lepas kunci.',
    ],
    author: 'Dimas Prasetyo',
    date: '02 Jul 2026',
    image: heroCar,
  },
  {
    slug: '5-mobil-terbaik-untuk-perjalanan-luar-kota-bersama-keluarga',
    category: 'Rekomendasi',
    title: '5 Mobil Terbaik untuk Perjalanan Luar Kota Bersama Keluarga',
    excerpt: 'Nyaman dan lega, ini rekomendasi armada terbaik untuk road trip keluarga.',
    content: [
      'Nyaman dan lega, ini rekomendasi armada terbaik untuk road trip keluarga yang akan membuat perjalanan jauh terasa lebih menyenangkan.',
      'MPV dengan tiga baris kursi jadi pilihan utama karena mampu menampung keluarga besar sekaligus barang bawaan yang banyak. Pastikan juga memilih mobil dengan fitur keselamatan lengkap dan AC yang dingin untuk perjalanan jarak jauh.',
      'Jangan lupa cek kondisi ban dan rem sebelum berangkat, terutama jika rute perjalanan melewati jalur pegunungan atau jalan berkelok.',
    ],
    author: 'Siti Aminah',
    date: '28 Jun 2026',
    image: sigra,
  },
  {
    slug: 'trik-parkir-mundur-yang-wajib-dikuasai-pengemudi-baru',
    category: 'Tips Berkendara',
    title: 'Trik Parkir Mundur yang Wajib Dikuasai Pengemudi Baru',
    excerpt: 'Latihan sederhana ini akan membuatmu lebih percaya diri saat parkir.',
    content: [
      'Latihan sederhana ini akan membuatmu lebih percaya diri saat parkir, bahkan di ruang yang sempit sekalipun.',
      'Kunci utama parkir mundur adalah memperhatikan posisi mobil sebelum mulai bermanuver, menggunakan spion sebagai panduan, dan bergerak perlahan sambil terus mengecek sekeliling kendaraan.',
      'Latih trik ini di area kosong yang luas terlebih dahulu sebelum mencobanya di tempat parkir umum yang lebih sempit dan ramai.',
    ],
    author: 'Rendy Kurniawan',
    date: '24 Jun 2026',
    image: bmw,
  },
  {
    slug: 'update-tarif-tol-jabodetabek-yang-perlu-kamu-tahu',
    category: 'Berita',
    title: 'Update Tarif Tol Jabodetabek yang Perlu Kamu Tahu',
    excerpt: 'Simak perubahan tarif terbaru sebelum merencanakan perjalananmu.',
    content: [
      'Simak perubahan tarif terbaru sebelum merencanakan perjalananmu, agar anggaran perjalanan lebih terukur.',
      'Beberapa ruas tol di kawasan Jabodetabek mengalami penyesuaian tarif belakangan ini. Selalu cek informasi resmi dari operator jalan tol sebelum bepergian, terutama jika kamu sering melintasi rute yang sama untuk keperluan bisnis atau rental.',
      'Menyiapkan saldo e-toll yang cukup juga penting agar perjalanan tidak terhambat di gerbang tol.',
    ],
    author: 'Admin Crown Car',
    date: '20 Jun 2026',
    image: alphard,
  },
]

export const HERO_POST = ALL_POSTS[0]
export const SIDE_POSTS = [ALL_POSTS[1], ALL_POSTS[2]]
export const GRID_POSTS = ALL_POSTS.slice(3)

export function initials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function getPostBySlug(slug: string) {
  return ALL_POSTS.find((post) => post.slug === slug)
}
