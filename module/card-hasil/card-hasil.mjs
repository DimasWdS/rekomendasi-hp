import { merk } from "./../merk-hp/merk-hp.mjs";

// console.log(merk);

function createCardHasil(
  conTarget,
  namaHp,
  screenHp,
  chipsetHp,
  storageHp,
  batteryHp,
  priceHp,
  networkHp,
  cameraHp,
  fotoHp,
  reson,
  kireteriaHp
) {
  //   console.log("tes");

  const container = document.createElement("section");
  const conFoto = document.createElement("section");
  const conSpect = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(conFoto);
  container.appendChild(conSpect);

  container.classList.add("container-card-mobile");

  Object.assign(container.style, {
    // height: "20rem", //asumsi
    width: "100%",
    maxWidth: "80rem",
    backgroundColor: "var(--young-blue)",
    backgroundColor: "#4b607f",
    display: "flex",
    margin: "auto",
    border: "5px solid #9f9f9f9a",
    borderRadius: "8px",
    boxShadow: "rgba(79, 79, 86, 0.6) 0px 7px 29px 0px",
    scale: "0.8",
  });
  {
    const img = document.createElement("div");

    Object.assign(conFoto.style, {
      width: "40%",
      // height: "100%",
      // backgroundColor: "blue",
      display: "flex",
      alignItems: "center",
    });

    conFoto.appendChild(img);

    conFoto.classList.add("con-foto-mobile");

    Object.assign(img.style, {
      width: "100%",
      aspectRatio: "1/1",
      // backgroundColor: "green",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(asset/img-hp/${fotoHp})`,
      filter: "drop-shadow(0 14px 16px rgba(0, 0, 0, 0.8))",
    });
  }
  {
    const header = document.createElement("header");

    Object.assign(conSpect.style, {
      flex: "1",
      // backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      padding: "1.5rem 0.5rem",
    });

    conSpect.appendChild(header);

    header.textContent = "SPESIFIKASI 📱";

    header.classList.add("poppins");

    Object.assign(header.style, {
      width: "100%",
      // backgroundColor: "yellow",
      backgroundColor: "#e8d8c9",
      fontWeight: "800",
      width: "max-content",
      padding: "0.3rem 1.2rem",
      borderRadius: "5px",
      color: "#191919ff",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    });

    for (let i = 0; i < 8; i++) {
      const conCardSpec = document.createElement("div");
      const label = document.createElement("label");
      const conTeks = document.createElement("section");
      const teks = document.createElement("span");

      conSpect.appendChild(conCardSpec);
      conCardSpec.appendChild(label);
      conCardSpec.appendChild(conTeks);
      conTeks.appendChild(teks);

      Object.assign(conCardSpec.style, {
        width: "100%",
        // height: "5rem",
        // backgroundColor: "cyan",
        margin: "1rem 0 0 0",
        display: "flex",
        flexDirection: "column",
      });
      label.classList.add("poppins");

      Object.assign(label.style, {
        // backgroundColor: "#e8d8c9",
        width: "max-content",
        padding: "0.2rem 1rem",
        backgroundColor: "#f3701e",
        fontWeight: "700",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        // color: "#191919ff",
        color: "#e8d8c9",
      });
      Object.assign(conTeks.style, {
        width: "100%",
        // height: "3rem",
        backgroundColor: "#f3701e",
        padding: "3px",
        // borderRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopRightRadius: "8px",
        color: "#191919ff",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 8px 15px -3px",
      });

      teks.classList.add("inter");
      Object.assign(teks.style, {
        padding: "0.8rem 0.2rem",
        display: "inline-flex",
        width: "100%",
        backgroundColor: "#e8d8c9",
        fontWeight: "800",
        // overflow: "auto", // Tidak diperlukan jika wrapping sudah benar
        // whiteSpace: "normal", // Sudah default, tidak perlu eksplisit

        // **KEY FIX 🔑**
        wordBreak: "break-all", // Memaksa pemutusan baris untuk satu kata yang sangat panjang

        // wordWrap: "break-word", // Lama tapi masih banyak dipakai
        // overflowWrap: "break-word", // modern
        borderRadius: "5px",
      });

      switch (i) {
        case 0:
          label.textContent = "Name";
          teks.textContent = `${namaHp}`;
          break;
        case 1:
          label.textContent = "Screen";
          teks.textContent = `${screenHp}`;
          break;
        case 2:
          label.textContent = "Chipset";
          teks.textContent = `${chipsetHp}`;
          break;
        case 3:
          label.textContent = "Storage";
          teks.textContent = `${storageHp} GB`;
          break;
        case 4:
          label.textContent = "Battery";
          teks.textContent = `${batteryHp} MAH`;
          break;
        case 5:
          label.textContent = "Price";
          teks.textContent = `Start from ${priceHp}`;
          break;
        case 6:
          label.textContent = "Others";
          teks.textContent = `Network : ${networkHp}, Camera : ${cameraHp} MP`;
          break;
        case 7:
          label.textContent = "Reason";

          teks.innerHTML = " ";
          const ul = document.createElement("ul");
          teks.appendChild(ul);

          ul.classList.add("reson-list");
          console.log(merk);
          const cari = `${kireteriaHp}`;

          if (merk.includes(cari)) {
            Object.assign(ul.style, {
              padding: "0 0 0 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            });

            for (const [kunci, alasan] of Object.entries(reson)) {
              const li = document.createElement("li");
              ul.appendChild(li);

              li.textContent = alasan;
            }
          } else {
            Object.assign(ul.style, {
              padding: "0 0 0 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            });

            for (let i = 0; i < kireteriaHp.length; i++) {
              const li = document.createElement("li");
              ul.appendChild(li);

              const kunciSaatIni = kireteriaHp[i];

              const reasonHp = reson[kunciSaatIni];

              li.textContent = reasonHp;
            }
          }

          break;
      }
    }
  }
}

export { createCardHasil };
