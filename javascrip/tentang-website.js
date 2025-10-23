const container = document.createElement("section");
const bgBlur = document.createElement("section");
const conKonten = document.createElement("section");

document.body.appendChild(container);
container.appendChild(bgBlur);
container.appendChild(conKonten);

Object.assign(container.style, {
  position: "absolute",
  height: "100dvh",
  width: "100%",
  top: "0",
  left: "0",
  zIndex: "6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   display: "none",
  transform: "translateY(-100%)",
  transition: "all 0.3s ease",
});

Object.assign(bgBlur.style, {
  height: "100%",
  width: "100%",
});

bgBlur.classList.add("blur-box");

Object.assign(conKonten.style, {
  position: "absolute",
  height: "80%",
  width: "80%",
  backgroundColor: "var(--white)",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.74) 0px 3px 8px",
  // overflow: "hidden",
  padding: "20px 2rem",
});

const conBtnClose = document.createElement("section");
const a = document.createElement("a");

{
  conKonten.appendChild(conBtnClose);
  conBtnClose.appendChild(a);

  a.classList.add("kuda-lumping");

  Object.assign(conBtnClose.style, {
    position: "absolute",
    height: "3rem",
    aspectRatio: "1/1",

    // backgroundColor: "yellow",
    borderRadius: "50%",
    left: "100%",
    bottom: "100%",
    transform: "translate(-50%, 50%)",
    cursor: "pointer",
    // overflow: "hidden",
  });

  Object.assign(a.style, {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    display: "inline-flex",
    borderRadius: "50%",
    backgroundColor: "rgb(231, 151, 2)",
    boxShadow: "0 5px 0 rgb(158, 96, 20)",
    border: "2px solid #232323ff",
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  });

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");

    a.appendChild(div);

    Object.assign(div.style, {
      width: "60%",
      height: "4px",
      backgroundColor: "#232323ff",
      position: "absolute",
      borderRadius: "5px",
    });

    if (i === 0) {
      Object.assign(div.style, {
        rotate: "45deg",
      });
    } else {
      Object.assign(div.style, {
        rotate: "-45deg",
      });
    }
  }
}

//
{
  const btnTentangWebsite = document.getElementById("tentang-website");

  btnTentangWebsite.addEventListener("click", () => {
    Object.assign(container.style, {
      transform: "translateY(0)",
    });
  });

  a.addEventListener("click", () => {
    Object.assign(container.style, {
      transform: "translateY(-100%)",
    });
  });
}

{
  const container = document.createElement("section");
  const teks1 = document.createElement("p");

  conKonten.appendChild(container);
  container.appendChild(teks1);

  Object.assign(container.style, {
    height: "100%",
    width: "100%",
    // backgroundColor: "green",
    // borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  });

  // console.log(container);

  [teks1].forEach(
    (el) => el.classList.add("monospace") + (el.style.fontSize = "1.3em")
  );

  {
    teks1.textContent = "Website ini Menggunakan metode Backward chaining";
  }
}
