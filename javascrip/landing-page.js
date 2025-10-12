const btnStart = document.getElementById("start-sistem");
const boxSearch = document.querySelector(".container-input");
const boxTextarea = document.querySelector(".container-input textarea");
const containerHasil = document.querySelector(".card-hasil");
const conHasil = document.querySelector(".container-hasil");

btnStart.addEventListener("click", () => {
  btnStart.classList.add("displayHidden");
  boxSearch.classList.remove("displayHidden");
  Object.assign(conHasil.style, {
    paddingBottom: "15rem",
  });
});

const btnXBox = document.querySelector(".btn-hidden");

btnXBox.addEventListener("click", () => {
  btnStart.classList.remove("displayHidden");
  boxSearch.classList.add("displayHidden");
  containerHasil.innerHTML = "";
  boxTextarea.value = "";
  Object.assign(conHasil.style, {
    paddingBottom: "0",
  });
  //   console.log("dancok");
});

console.log(boxSearch);
