import { createCardHasil, data, kamus, hpGaming } from "./../module/main.mjs";

const btnSend = document.getElementById("btn-send");
const inputData = document.getElementById("input-data");
const containerCardHasil = document.querySelector(".card-hasil");

btnSend.addEventListener("click", () => {
  const dataInput = inputData.value;

  if (!dataInput) {
    alert("upss jangan kosong");
    return;
  }

  const dataSearch = dataInput
    .split(",")
    .map((items) => items.trim())
    .map((kata) => {
      if (kamus.hasOwnProperty(kata)) {
        return kamus[kata];
      } else {
        return kata;
      }
    });

  console.log(dataSearch);
  switch (true) {
    case dataSearch.includes("gaming"):
      // console.log("mencari hp gaming");
      // console.log(data);
      // console.assert(hpGaming);

      const hasilPencocokan = data.map((hp) => {
        let layar = false;
        let prosesor = false;
        let refresRate = false;
        let ram = false;
        let penyimpanan = false;
        let baterai = false;

        // console.log(hpGaming.refresRate);

        if (hp.screen === hpGaming.layar) {
          layar = true;
          // console.log("layar cocok");
        }

        if (hpGaming.prosesor.includes(hp.chipset)) {
          prosesor = true;
          // console.log("Chip cocok");
        }

        if (hpGaming.teloGaming.includes(parseInt(hp.telo))) {
          refresRate = true;
          // console.log("telo");
        }

        if (hpGaming.ram.includes(parseInt(hp.ram))) {
          ram = true;
          // console.log("ram cocok");
        }

        if (hpGaming.storage.includes(parseInt(hp.storage))) {
          penyimpanan = true;
          // console.log("penyimpanan cocok");
        }

        if (hpGaming.battery.includes(parseInt(hp.battery))) {
          baterai = true;
          // console.log("baterai cocok");
        }

        const totalKriteriaDipenuhi = [
          layar,
          prosesor,
          refresRate,
          ram,
          penyimpanan,
          baterai,
        ].filter(Boolean).length;

        const persentaseKecocokan = (totalKriteriaDipenuhi / 6) * 100;

        // console.log(totalKriteriaDipenuhi);

        const kesimpulan = {
          namaHp: hp.name,
          screenHp: hp.screen,
          chipHp: hp.chipset,
          ramHp: hp.ram,
          storageHp: hp.storage,
          batteryHp: hp.battery,
          priceHp: hp.price,
          detailKecocokan: {
            screen: layar,
            chipset: prosesor,
            refresRate: refresRate,
            ram: ram,
            storage: penyimpanan,
            battery: baterai,
          },
          skorkecocokan: persentaseKecocokan,
        };

        return kesimpulan;
      });

      const hasilTerurut = hasilPencocokan.sort(
        (a, b) => b.skorkecocokan - a.skorkecocokan
      );

      // console.log(hasilPencocokan);

      hasilPencocokan.forEach((finalHp) => {
        const {
          namaHp,
          screenHp,
          chipHp,
          ramHp,
          storageHp,
          batteryHp,
          priceHp,
          detailKecocokan,
          skorkecocokan,
        } = finalHp;

        createCardHasil(
          containerCardHasil,
          namaHp,
          screenHp,
          chipHp,
          ramHp,
          storageHp,
          batteryHp,
          priceHp,
          detailKecocokan,
          skorkecocokan,
          dataSearch
        );
      });

      break;
    case dataSearch.includes("fotografer"):
      console.log("mencari hp untuk foto foto");
      break;
  }
});
