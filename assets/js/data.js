// assets/js/data.js

const PRODUCTS = [
  // KATEGORI TANAH
  {
    id: "tanah-urug",
    name: "Tanah Urug / Tanah Timbunan",
    category: "Tanah",
    description:
      "Tanah berkualitas untuk keperluan pengurukan, peninggian lahan, dan dasar konstruksi.",
    unit: "m³ / rit",
    image: "assets/images/tanah-uruk.webp",
    gallery: ["assets/images/tanah-uruk.webp"],
    specifications: {
      Asal: "Galian Proyek",
      Warna: "Kuning",
      Kepadatan: "Tinggi",
    },
  },
  {
    id: "tanah-top-soil",
    name: "Tanah Top Soil",
    category: "Tanah",
    description:
      "Lapisan tanah atas yang subur, kaya akan bahan organik, sangat baik untuk keperluan taman dan lansekap.",
    unit: "m³ / rit",
    image: "assets/images/tanah-topsoil.webp",
    gallery: ["assets/images/tanah-topsoil.webp"],
    specifications: {
      Warna: "Coklat Kehitaman",
      Struktur: "Gembur",
      "Bahan Organik": "Tinggi",
    },
  },

  // KATEGORI PASIR
  {
    id: "pasir-gunung-kuning",
    name: "Pasir Gunung Kuning",
    category: "Pasir",
    description:
      "Pasir gunung dengan warna kekuningan, cocok untuk adukan plesteran dan pemasangan bata.",
    unit: "m³ / rit",
    image: "assets/images/pasirgunungkuning.webp",
    gallery: ["assets/images/pasirgunungkuning.webp"],
    specifications: {
      Asal: "Gunung Pasir",
      "Kadar Lumpur": "< 5%",
      Warna: "Kuning",
    },
  },
  {
    id: "pasir-gunung-merah",
    name: "Pasir Gunung Merah",
    category: "Pasir",
    description:
      "Pasir gunung dengan warna kemerahan, memiliki karakteristik yang baik untuk berbagai keperluan konstruksi.",
    unit: "m³ / rit",
    image: "assets/images/pasirgunungmerah.webp",
    gallery: ["assets/images/pasirgunungmerah.webp"],
    specifications: {
      Asal: "Gunung Pasir",
      "Kadar Lumpur": "< 5%",
      Warna: "Merah",
    },
  },
  {
    id: "pasir-cor",
    name: "Pasir Cor / Pasir Beton",
    category: "Pasir",
    description:
      "Pasir dengan butiran kasar dan tajam, sangat baik untuk campuran beton struktural.",
    unit: "m³ / rit",
    image: "assets/images/pasirbeton.webp",
    gallery: ["assets/images/pasirbeton.webp"],
    specifications: {
      Asal: "Palu",
      "Kadar Lumpur": "< 3%",
      "Ukuran Butir": "2 - 5 mm",
    },
  },

  // KATEGORI BATU
  {
    id: "batu-gunung",
    name: "Batu Gunung / Batu Pondasi",
    category: "Batu",
    description:
      "Batu belah untuk keperluan utama pondasi bangunan. Sangat kuat, kokoh, dan tahan lama.",
    unit: "m³ / rit",
    image: "assets/images/batupondasi.webp",
    gallery: ["assets/images/batupondasi.webp"],
    specifications: {
      Ukuran: "10-30 cm (Bervariasi)",
      Warna: "Abu-abu kehitaman",
      Kekerasan: "Sangat Keras",
    },
  },
  {
    id: "batu-kali",
    name: "Batu Kali",
    category: "Batu",
    description:
      "Batu alam dari sungai dengan permukaan yang lebih halus, biasa digunakan untuk pondasi, dinding, dan elemen dekoratif.",
    unit: "m³ / rit",
    image: "assets/images/batukali.webp",
    gallery: ["assets/images/batukali.webp"],
    specifications: {
      Bentuk: "Bulat / Lonjong (Alami)",
      Warna: "Abu-abu natural",
      Kekerasan: "Keras",
    },
  },
  {
    id: "batu-split",
    name: "Batu Split (Semua Ukuran)",
    category: "Batu",
    description:
      "Batu pecah berbagai ukuran (1/2, 2/3, 3/5) untuk campuran beton cor, jalan, dan proyek infrastruktur lainnya.",
    unit: "m³ / rit",
    image: "assets/images/Batu-Split.webp",
    gallery: ["assets/images/Batu-Split.webp"],
    specifications: {
      Ukuran: "1/2, 2/3, 3/5",
      Bentuk: "Kubikal, Bersudut",
      Penggunaan: "Beton, Pengecoran, Agregat",
    },
  },
  {
    id: "batu-merah-jalanan",
    name: "Batu Merah (Agregat Jalan)",
    category: "Batu",
    description:
      "Agregat batu berwarna kemerahan yang dipadatkan, khusus digunakan sebagai lapisan dasar untuk pembuatan jalan.",
    unit: "m³ / rit",
    image: "assets/images/batumerah.webp",
    gallery: ["assets/images/batumerah.webp"],
    specifications: {
      Fungsi: "Dasar perkerasan jalan",
      Warna: "Merah Kecoklatan",
      Kepadatan: "Sangat tinggi setelah dipadatkan",
    },
  },
  {
    id: "batu-koral-sikat",
    name: "Batu Koral Sikat",
    category: "Batu",
    description:
      "Batu koral hias untuk lantai carport, taman, dan area outdoor. Memberikan tampilan alami dan anti-slip.",
    unit: "karung",
    image: "assets/images/Batu-Koral-Sikat.webp",
    gallery: ["assets/images/Batu-Koral-Sikat.webp"],
    specifications: {
      Warna: "Pancawarna",
      Ukuran: "1-2 cm (Bervariasi)",
      Finishing: "Halus Tumpul",
    },
  },

  // KATEGORI BATA
  {
    id: "bata-merah-press",
    name: "Batu Bata Merah Press",
    category: "Bata",
    description:
      "Bata merah press berkualitas tinggi, padat, dan presisi. Cocok untuk dinding bangunan yang kokoh dan rapi.",
    unit: "pcs",
    image: "assets/images/Batu-Bata-Merah.webp",
    gallery: ["assets/images/Batu-Bata-Merah.webp"],
    specifications: {
      Jenis: "Press Mesin",
      Ukuran: "20 x 10 x 5 cm",
      Kekuatan: "Tahan Cuaca",
    },
  },
  {
    id: "bata-ringan-putih",
    name: "Bata Ringan Putih (Hebel)",
    category: "Bata",
    description:
      "Bata ringan aerasi (AAC) yang presisi, ringan, dan memiliki kemampuan insulasi termal dan suara yang baik.",
    unit: "m³",
    image: "assets/images/bataputih.webp",
    gallery: ["assets/images/bataputih.webp"],
    specifications: {
      Jenis: "Autoclaved Aerated Concrete (AAC)",
      Warna: "Putih",
      Keunggulan: "Ringan, Presisi, Insulator",
    },
  },

  // KATEGORI ALAT BERAT
  {
    id: "sewa-excavator",
    name: "Penyewaan Excavator",
    category: "Alat Berat",
    description:
      "Menyediakan jasa penyewaan berbagai jenis excavator untuk keperluan proyek konstruksi, galian, dan pengerukan.",
    unit: "jam / hari",
    image: "assets/images/sewaexcavator.webp",
    gallery: ["assets/images/sewaexcavator.webp"],
    specifications: {
      Tipe: "Standard, Long Arm, Breaker",
      Kapasitas: "Berbagai kelas (PC75, PC200, dll)",
      Layanan: "Termasuk Operator",
    },
  },
  {
    id: "sewa-towing",
    name: "Penyewaan Towing / Self Loader",
    category: "Alat Berat",
    description:
      "Jasa angkutan alat berat dan kendaraan menggunakan truk towing (derek) atau self loader.",
    unit: "per ritase",
    image: "assets/images/sewatowing.webp",
    gallery: ["assets/images/sewatowing.webp"],
    specifications: {
      Jenis: "Towing Gendong, Self Loader",
      Kapasitas: "Disesuaikan dengan beban",
      Area: "Lokal & regional",
    },
  },
];
