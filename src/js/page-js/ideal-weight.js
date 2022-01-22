const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  height = document.querySelector("#height"),
  gender = document.querySelectorAll("input[name= gender]");
let genderValue = "";
async function getIdealWeightData(e, t) {
  try {
    loader.classList.remove("hide-form");
    const r = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${e}&height=${t.value}`,
      a = await fetch(r, {
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca",
        },
      }),
      l = await a.json();
    dataChecker(l.data),
      (result.innerHTML = HtmlPurifier(
        `<p class = "result result-bmi">Robinson = ${l.data.Robinson}kg</p>\n        <p class = "result  result-bmi">Miller = ${l.data.Miller}kg</p>\n        <p class = "result result-bmi">Devine = ${l.data.Devine}kg</p>\n        <p class = "result result-bmi">Hamwi = ${l.data.Hamwi}kg</p>`
      )),
      setTimeout(() => {
        formSection.classList.add("hide-form"),
          resultSection.classList.add("display-result"),
          loader.classList.add("hide-form");
      }, 500);
  } catch (e) {}
}
btn.addEventListener("click", (e) => {
  if (
    (e.preventDefault(),
    gender.forEach((e) => {
      e.checked && (genderValue = e.value);
    }),
    !(height.value > 130 && height.value < 230 && genderValue))
  )
    return void alert.classList.remove("dismiss");
  const t = resultSection.clientHeight;
  window.scrollTo({ top: t, left: 0, behavior: "smooth" }),
    getIdealWeightData(genderValue, height);
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(), (result.innerHTML = ""), reset(height, genderValue);
  });
