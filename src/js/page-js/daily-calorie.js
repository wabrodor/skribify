const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  weight = document.querySelector("#weight"),
  height = document.querySelector("#height"),
  gen = document.querySelectorAll("input[name= gender]"),
  age = document.querySelector("#age"),
  activity = document.querySelector("#activity");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const t = activity.options[activity.selectedIndex].value;
  let l = "";
  if (
    (gen.forEach((e) => {
      e.checked && (l = e.value);
    }),
    !(
      height.value > 130 &&
      height.value < 230 &&
      l &&
      weight.value > 10 &&
      weight.value < 200 &&
      age.value > 10 &&
      age.value < 80 &&
      t
    ))
  )
    return void alert.classList.remove("dismiss");
  const a = resultSection.clientHeight;
  window.scrollTo({ top: a, left: 0, behavior: "smooth" });
  try {
    const e = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age.value}&gender=${l}&weight=${weight.value}&height=${height.value}&activitylevel=${t}`,
      a = await fetch(e, {
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca",
        },
      }),
      r = (await a.json()).data;
    console.log(r),
      loader.classList.remove("hide-form"),
      setTimeout(() => {
        formSection.classList.add("hide-form"),
          dataChecker(r),
          resultSection.classList.add("display-result"),
          (result.innerHTML = HtmlPurifier(
            `<p class = "result result-bmi">Basic metabolic rate = ${r.BMR}</p>\n          <p class = "result result-bmi">for extreme weight gain = ${r.goals["Extreme weight gain"].calory}calories per day</p>\n          <p class = "result result-bmi">for Extreme weight loss = ${r.goals["Extreme weight loss"].calory} calories per day</p>\n          <p class = "result result-bmi">for Mild weight gain" = ${r.goals["Mild weight gain"].calory} calories per day</p>\n          <p class = "result result-bmi">for Mild weight los = ${r.goals["Mild weight loss"].calory} calories per day</p>\n          <p class = "result result-bmi">for weight gain = ${r.goals["Weight gain"].calory} calories per day</p>\n          <p class = "result result-bmi">for  weight loss = ${r.goals["Weight loss"].calory} calories per day</p>`
          )),
          loader.classList.add("hide-form");
      }, 500);
  } catch (e) {
    console.log(e);
  }
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(), (result.innerHTML = ""), reset(height, age, weight);
  });
