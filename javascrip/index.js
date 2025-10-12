import { tes, createCardHasil, data } from "./../module/main.mjs";

const btnSend = document.getElementById("btn-send");
const inputData = document.getElementById("input-data");
const containerCardHasil = document.querySelector(".card-hasil");

btnSend.addEventListener("click", () => {
  const dataInput = inputData.value.trim();

  if (!dataInput) {
    alert("upss jangan kosong");
    return;
  }

  const dataArray = dataInput
    .split(",")
    .map((item) => item.toLowerCase().trim());

  console.log("Kata kunci:", dataArray);

  const hasil = data.filter((item) => {
    const nilaiGabungan = Object.values(item)
      .map((val) => (Array.isArray(val) ? val.join(" ") : val))
      .join(" ")
      .toLowerCase();

    return dataArray.every((keyword) => nilaiGabungan.includes(keyword));
  });

  console.log("Hasil pencarian:", hasil);

  containerCardHasil.innerHTML = "";

  if (hasil.length === 0) {
    containerCardHasil.innerHTML =
      "<p style='color:red;'>Tidak ada hasil yang cocok</p>";
    return;
  }

  hasil.forEach((hp) => {
    const {
      name,
      screen,
      chipset,
      storage,
      battery,
      price,
      network,
      camera,
      foto,
    } = hp;

    createCardHasil(
      containerCardHasil,
      name,
      screen,
      chipset,
      storage,
      battery,
      price,
      network,
      camera,
      foto
    );
  });
});
