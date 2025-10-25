const gaming = {
  "hp untuk gaming": "gaming",
  "hp gaming": "gaming",
  "smartphone gaming": "gaming",
  "smartphone untuk gaming": "gaming",
  "hp untuk main game": "gaming",
};

const nonton = {
  "layar jernih": "nonton",
  "enak buat nonton film": "nonton",
  "layar bagus": "nonton",
  "kualitas gambar bagus": "nonton",
};

const universal = {
  "baterai badak": "5000",
  "penyimpanan lega": "256",
  "penyimpanan banyak": "256",
  "1tb": "1000",
  "1tb penyimpanan": "1000",
  "layar amoled": "amoled",
  "layar jernih": "amoled",
  "layar ips": "ips",
  "jaringan 5g": "5g",
  "hp untuk semua kebutuhan": "all rounder",
  "hp murah": "lowend",
  "hp mahal": "flagship",
  "foto foto": "fotografer",
};

const kamus = { ...gaming, ...nonton, ...universal };

export { kamus };
