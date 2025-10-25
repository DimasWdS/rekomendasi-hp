import {
  createCardHasil,
  data,
  kamus,
  hpGaming,
  hpNonton,
} from "./../module/main.mjs";

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
    // search gaming
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
        let speaker = false;

        // console.log(hpGaming.refresRate);

        if (hp.screen === hpGaming.layar) {
          layar = true;
          // console.log("layar cocok");
        }

        if (hpGaming.prosesor.includes(hp.chipset)) {
          prosesor = true;
          // console.log("Chip cocok");
        }

        if (hpGaming.refresRate.includes(parseInt(hp.refresRate))) {
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

        // if (hpGaming.battery.includes(parseInt(hp.battery))) {
        //   baterai = true;
        //   // console.log("baterai cocok");
        // }

        if (hpGaming.battery <= hp.battery) {
          baterai = true;
        }

        if (hp.speaker === "stereo") {
          speaker = true;
        }

        const totalKriteriaDipenuhi = [
          layar,
          prosesor,
          refresRate,
          ram,
          penyimpanan,
          baterai,
          speaker,
        ].filter(Boolean).length;

        const persentaseKecocokan = (totalKriteriaDipenuhi / 7) * 100;

        // console.log(totalKriteriaDipenuhi);

        const kesimpulan = {
          namaHp: hp.name,
          screenHp: hp.screen,
          chipHp: hp.chipset,
          ramHp: hp.ram,
          storageHp: hp.storage,
          batteryHp: hp.battery,
          priceHp: hp.price,
          network: hp.network,
          frontCam: hp.frontCam,
          backCam: hp.backCam,
          refresRate: hp.refresRate,
          fotoHp: hp.foto,
          speakerHp: hp.speaker,
          detailKecocokan: {
            screen: layar,
            chipset: prosesor,
            refresRate: refresRate,
            ram: ram,
            storage: penyimpanan,
            battery: baterai,
            speaker: speaker,
          },
          skorkecocokan: persentaseKecocokan,
        };

        return kesimpulan;
      });

      const hasilTerurut = hasilPencocokan.sort(
        (a, b) => b.skorkecocokan - a.skorkecocokan
      );
      const hasilLolosFilter = hasilTerurut.filter(
        (hp) => hp.skorkecocokan >= 60
      );

      // console.log(hasilPencocokan);

      hasilLolosFilter.forEach((finalHp) => {
        const {
          namaHp,
          screenHp,
          chipHp,
          ramHp,
          storageHp,
          batteryHp,
          priceHp,
          network,
          frontCam,
          backCam,
          refresRate,
          fotoHp,
          detailKecocokan,
          skorkecocokan,
          speakerHp,
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
          dataSearch,
          network,
          frontCam,
          backCam,
          refresRate,
          speakerHp,
          fotoHp
        );
      });

      break;
    // search fotografer
    case dataSearch.includes("nonton"):
      const hpNontonData = data.map((hp) => {
        let screen = false;
        let refresRate = false;
        let speaker = false;
        let battery = false;

        if (hp.screen === hpNonton.screen) {
          screen = true;
        }

        const kecocokanRate = hp.refresRate.some((rate) =>
          hpNonton.refresRate.includes(rate)
        );

        if (kecocokanRate) {
          refresRate = true;
        }

        if (hp.speaker === hpNonton.speaker) {
          speaker = true;
        }

        if (hp.battery >= hpNonton.battery) {
          battery = true;
        }

        const totalKireteria = [screen, refresRate, speaker, battery].filter(
          Boolean
        ).length;

        const persentaseKecocokan = (totalKireteria / 4) * 100;

        const kesimpulan = {
          namaHp: hp.name,
          screenHp: hp.screen,
          chipHp: hp.chipset,
          ramHp: hp.ram,
          storageHp: hp.storage,
          batteryHp: hp.battery,
          priceHp: hp.price,
          network: hp.network,
          frontCam: hp.frontCam,
          backCam: hp.backCam,
          refresRate: hp.refresRate,
          fotoHp: hp.foto,
          speakerHp: hp.speaker,
          skorkecocokan: persentaseKecocokan,
          detailKecocokan: {
            screen: screen,
            refresRate: refresRate,
            speaker: speaker,
            battery: battery,
          },
        };

        return kesimpulan;
      });

      console.log(hpNontonData);

      const filterHpNonton = hpNontonData.filter(
        (hp) => hp.skorkecocokan >= 70
      );

      const urutHpNonton = filterHpNonton.sort(
        (a, b) => b.skorkecocokan - a.skorkecocokan
      );

      console.log(urutHpNonton);

      urutHpNonton.forEach((finalHp) => {
        const {
          namaHp,
          screenHp,
          chipHp,
          ramHp,
          storageHp,
          batteryHp,
          priceHp,
          network,
          frontCam,
          backCam,
          refresRate,
          fotoHp,
          detailKecocokan,
          skorkecocokan,
          speakerHp,
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
          dataSearch,
          network,
          frontCam,
          backCam,
          refresRate,
          speakerHp,
          fotoHp
        );
      });

      break;
  }
});
