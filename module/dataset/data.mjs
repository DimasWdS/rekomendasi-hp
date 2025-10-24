const data = [
  {
    name: "samsung s24 ultra",
    screen: "amoled",
    // telo adalah refres rate
    refresRate: [90, 120],
    chipset: "qualcomm snapdragon 8 elite gen 3",
    // dari yang kecil ke yang besar
    ram: [8, 12],
    speaker: "stereo",
    // dari yang kecil ke yang besar
    storage: [256, 512, 1000],
    battery: 5000,
    price: 16999000,
    network: "5G",
    frontCam: 50,
    backCam: 200,
    foto: "samsungs25.png",
  },
  {
    name: "iphone 15 pro",
    screen: "amoled",
    // telo adalah refres rate
    refresRate: [90, 120],
    chipset: "apple a17 pro",
    // dari yang kecil ke yang besar
    ram: [8],
    speaker: "stereo",
    // dari yang kecil ke yang besar
    storage: [128, 256, 512, 1000],
    battery: 3274, // dalam mAh
    price: 20999000, // Harga awal di Indonesia (128GB)
    network: "5G",
    frontCam: 12,
    backCam: 48, // Kamera utama (Wide)
    foto: "iphone15pro.png",
  },
  {
    name: "oppo find x8 pro",
    screen: "amoled",
    refresRate: [90, 120],
    chipset: "mediatek dimensity 9400",
    // dari yang kecil ke yang besar
    ram: [12, 16],
    speaker: "stereo",
    // dari yang kecil ke yang besar
    storage: [256, 512, 1000],
    battery: 5910, // dalam mAh (kapasitas tipikal)
    price: 19999000, // Harga perkiraan awal di Indonesia (16GB/512GB)
    network: "5G",
    frontCam: 32,
    backCam: 50, // Kamera utama (Wide)
    foto: "oppofindx8pro.png",
  },
  {
    name: "vivo x100 pro",
    screen: "amoled",
    refresRate: [90, 120],
    chipset: "mediatek dimensity 9300",
    // dari yang kecil ke yang besar
    ram: [12, 16],
    speaker: "stereo",
    // dari yang kecil ke yang besar
    storage: [256, 512, 1000],
    battery: 5400, // dalam mAh (kapasitas tipikal)
    price: 16999000, // Harga resmi di Indonesia (16GB/512GB)
    network: "5G",
    frontCam: 32,
    backCam: 50, // Kamera utama (Wide)
    foto: "vivox100pro.png",
  },
  {
    name: "huawei pura 70 ultra",
    screen: "amoled",
    refresRate: [120], // Refresh rate maksimum
    chipset: "kirin 9010",
    // dari yang kecil ke yang besar
    ram: [16],
    speaker: "stereo",
    // dari yang kecil ke yang besar
    storage: [512, 1000],
    battery: 5200, // dalam mAh
    price: 17999000, // Harga resmi di Indonesia (16GB/512GB)
    network: "4G", // Koneksi jaringan yang didukung, tidak ada 5G di beberapa sumber
    frontCam: 13,
    backCam: 50, // Kamera utama (Wide, 1-inch sensor, Retractable lens)
    foto: "huawei_pura70ultra.png",
  },
  {
    name: "oppo find x8",
    screen: "amoled", // Panel AMOLED fleksibel
    refresRate: [120], // Refresh rate maksimum
    chipset: "mediatek dimensity 9400", // Prosesor 3nm
    // dari yang kecil ke yang besar
    ram: [12, 16],
    speaker: "stereo", // Speaker kemungkinan stereo (umum untuk flagship)
    // dari yang kecil ke yang besar
    storage: [256, 512], // Opsi 256GB dan 512GB (ada juga 1TB di beberapa sumber)
    battery: 5630, // dalam mAh (kapasitas umum)
    price: 13999000, // Harga resmi di Indonesia (12GB/256GB)
    network: "5g", // Koneksi jaringan yang didukung (sudah mendukung 5G)
    frontCam: 32, // Kamera depan
    backCam: 50, // Kamera utama (Triple 50MP, Wide, Ultrawide, Periscope Telephoto 3x optical zoom)
    foto: "oppo_findx8.png",
  },
  {
    name: "asus zenfone 11 ultra",
    screen: "amoled", // SAMSUNG Flexible AMOLED, LTPO
    refreshRate: [1, 120], // Refresh rate adaptif 1-120Hz
    refresRate: [144], // Refresh rate maksimum (khusus gaming)
    chipset: "qualcom snapdragon 8 gen 3", // Chipset 4nm
    // dari yang kecil ke yang besar
    ram: [12, 16], // LPDDR5X
    speaker: "stereo", // Speaker stereo
    // dari yang kecil ke yang besar
    storage: [256, 512], // UFS 4.0
    battery: 5500, // dalam mAh (Mendukung 65W wired dan 15W wireless)
    price: 9999000, // Harga promo resmi di Indonesia (12GB/256GB saat peluncuran)
    network: "5g", // Koneksi jaringan yang didukung
    frontCam: 32, // Kamera depan (output 8MP setelah pixel binning)
    backCam: 50, // Kamera utama (50MP Gimbal OIS, 13MP Ultrawide, 32MP Telephoto 3x optical zoom)
    foto: "asus_zenfone11ultra.png",
  },
  {
    name: "xiaomi 14t pro",
    screen: "amoled", // Panel AMOLED dengan spesifikasi tinggi
    refreshRate: [1, 144], // Refresh rate adaptif hingga 144Hz
    refresRate: [144], // Refresh rate maksimum
    chipset: "mediatek dimensity 9300+", // Chipset 4nm
    // dari yang kecil ke yang besar
    ram: [12, 16], // LPDDR5X (varian 16GB ada di beberapa sumber global/lokal)
    speaker: "stereo", // Speaker stereo dengan dukungan Hi-Res audio
    // dari yang kecil ke yang besar
    storage: [256, 512, 1000], // Opsi 256GB, 512GB, dan 1TB
    battery: 5000, // dalam mAh (Mendukung 120W wired dan 50W wireless)
    price: 8499000, // Harga resmi di Indonesia (12GB/256GB)
    network: "5g", // Koneksi jaringan yang didukung
    frontCam: 32, // Kamera depan
    backCam: 50, // Kamera utama (50MP Leica OIS Wide, 12MP Ultrawide, 50MP Leica Telephoto 2.6x optical zoom)
    foto: "xiaomi_14t_pro.png",
  },
  {
    name: "vivo v40 5g",
    screen: "amoled", // Panel AMOLED dengan resolusi 1.5K
    refreshRate: [60, 120], // Refresh rate 60Hz atau 120Hz
    refresRate: [120], // Refresh rate maksimum
    chipset: "qualcomm snapdragon 7 gen 3", // Chipset 4nm
    // dari yang kecil ke yang besar
    ram: [8, 12], // LPDDR4X
    speaker: "stereo", // Dual stereo speaker
    // dari yang kecil ke yang besar
    storage: [256, 512], // UFS 2.2
    battery: 5500, // dalam mAh (dengan 80W FlashCharge)
    price: 6499000, // Harga resmi di Indonesia (8GB/256GB)
    network: "5g", // Koneksi jaringan yang didukung (mendukung 5G)
    frontCam: 50, // Kamera depan (50MP ZEISS Group Selfie Camera dengan AF)
    backCam: 50, // Kamera utama (Dual 50MP ZEISS, Main OIS + Ultra Wide AF, Aura Light)
    foto: "vivo_v40_5g.png",
  },
  {
    name: "xiaomi 14t 5g",
    screen: "amoled", // Panel AMOLED dengan resolusi 1.5K
    refresRate: [144], // Refresh rate maksimum
    chipset: "mediatek dimensity 8300 ultra", // Chipset 4nm
    // dari yang kecil ke yang besar
    ram: [12, 16], // LPDDR5X (varian 16GB ada di beberapa sumber global)
    speaker: "stereo", // Speaker stereo
    // dari yang kecil ke yang besar
    storage: [256, 512], // UFS 4.0
    battery: 5000, // dalam mAh (dengan 67W HyperCharge)
    price: 6499000, // Harga resmi di Indonesia (12GB/256GB)
    network: "5g", // Koneksi jaringan yang didukung (mendukung 5G)
    frontCam: 32, // Kamera depan
    backCam: 50, // Kamera utama (Triple 50MP Leica OIS Wide + 50MP Telephoto 2x + 12MP Ultrawide)
    foto: "xiaomi_14t_5g.png",
  },
  {
    name: "poco x6 pro 5g",
    screen: "amoled", // Flow AMOLED, 1.5K CrystalRes
    refresRate: [120], // Refresh rate maksimum
    chipset: "mediatek dimensity 8300 ultra", // Chipset 4nm
    // dari yang kecil ke yang besar
    ram: [8, 12], // LPDDR5X
    speaker: "stereo", // Dual speakers dengan Dolby Atmos
    // dari yang kecil ke yang besar
    storage: [256, 512], // UFS 4.0
    battery: 5000, // dalam mAh (dengan 67W Turbo Charging)
    price: 4799000, // Harga perkenalan resmi di Indonesia (12GB/512GB)
    network: "5g", // Koneksi jaringan yang didukung
    frontCam: 16, // Kamera depan
    backCam: 64, // Kamera utama (Triple 64MP OIS Wide + 8MP Ultrawide + 2MP Macro)
    foto: "poco_x6_pro_5g.png",
  },
  {
    name: "redmi note 13 pro 5g",
    screen: "amoled", // Layar AMOLED CrystalRes 1,5K
    refresRate: [120], // Refresh rate maksimum
    chipset: "qualcomm snapdragon 7s gen 2", // Chipset 4nm
    // dari yang kecil ke yang besar
    ram: [8, 12], // LPDDR4X
    speaker: "stereo", // Speaker ganda dengan Dolby Atmos
    // dari yang kecil ke yang besar
    storage: [256, 512], // UFS 2.2
    battery: 5100, // dalam mAh (dengan 67W Turbo Charging)
    price: 4399000, // Harga resmi di Indonesia (8GB/256GB)
    network: "5g", // Koneksi jaringan yang didukung
    frontCam: 16, // Kamera depan
    backCam: 200, // Kamera utama (Triple 200MP OIS Wide + 8MP Ultrawide + 2MP Macro)
    foto: "redmi_note_13_pro_5g.png",
  },
  {
    name: "infinix note 40 4g",
    screen: "amoled", // Layar AMOLED Super Bright
    refresRate: [60, 120], // Refresh rate adaptif hingga 120Hz
    chipset: "mediatek helio g99 ultimate", // Chipset 6nm
    // dari yang kecil ke yang besar
    ram: [8], // Hanya satu varian RAM, LPDDR4X (bisa diperluas hingga 16GB)
    speaker: "stereo", // Dual speakers, disetel oleh JBL
    // dari yang kecil ke yang besar
    storage: [256], // Hanya satu varian storage UFS
    battery: 5000, // dalam mAh (dengan 45W FastCharge 2.0 + 20W Wireless MagCharge)
    price: 2799000, // Harga resmi di Indonesia (8GB/256GB)
    network: "4g", // Koneksi jaringan yang didukung (tidak ada 5G)
    frontCam: 32, // Kamera depan
    backCam: 108, // Kamera utama (Triple 108MP Wide, 3X Lossless Superzoom)
    foto: "infinix_note_40_4g.png",
  },
  {
    name: "infinix hot 50 4g",
    screen: "ips", // Layar IPS LCD
    refresRate: [60, 120], // Refresh rate standar dan maksimum
    chipset: "mediatek helio g100", // Chipset 6nm (Penerus Helio G99)
    // dari yang kecil ke yang besar
    ram: [6, 8], // LPDDR4X (dengan Extended RAM hingga 16GB)
    speaker: "stereo", // Loudspeaker (umumnya stereo di seri Hot terbaru)
    // dari yang kecil ke yang besar
    storage: [128, 256], // UFS 2.2 atau UFS, dapat diperluas dengan microSD
    battery: 5000, // dalam mAh (dengan 18W Fast Charging)
    price: 1749000, // Harga resmi di Indonesia (8GB/128GB)
    network: "4g", // Koneksi jaringan yang didukung (tidak ada 5G)
    frontCam: 8, // Kamera depan
    backCam: 50, // Kamera utama (Dual 50MP Wide + AI/Macro)
    foto: "infinix_hot_50_4g.png",
  },

  {
    name: "redmi 14c",
    screen: "ips", // Layar IPS LCD besar
    refresRate: [60, 120], // Refresh rate adaptif hingga 120Hz
    chipset: "mediatek helio g81-ultra", // Chipset 12nm
    // dari yang kecil ke yang besar
    ram: [6, 8], // LPDDR4X (dengan fitur Ekstensi memori hingga 16GB)
    speaker: "mono", // Loudspeaker (kemungkinan mono/single, fitur peningkat volume 150%)
    // dari yang kecil ke yang besar
    storage: [128, 256], // eMMC 5.1
    battery: 5160, // dalam mAh (dengan 18W Fast Charging)
    price: 1399000, // Harga promo resmi di Indonesia (6GB/128GB)
    network: "4g", // Koneksi jaringan yang didukung (tidak ada 5G)
    frontCam: 13, // Kamera depan
    backCam: 50, // Kamera utama (Dual 50MP Wide + Lensa Bantu)
    foto: "redmi_14c.png",
  },

  // MIDRANGE
];

export { data };
