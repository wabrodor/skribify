const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  weight = document.querySelector("#weight"),
  activity = document.querySelector("#activity");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const t = activity.options[activity.selectedIndex];
  if (!(weight.value > 20 && weight.value < 180))
    return void alert.classList.remove("dismiss");
  loader.classList.remove("hide-form");
  const r = resultSection.clientHeight;
  window.scrollTo({ top: r, left: 0, behavior: "smooth" });
  let l = 0;
  "1" === t.value
    ? (l = 0.8 * weight.value)
    : "2" === t.value
    ? (l = 1.2 * weight.value)
    : "3" === t.value
    ? (l = 1.4 * weight.value)
    : "4" === t.value && (l = 1.8 * weight.value),
    (result.innerHTML = HtmlPurifier(
      `<p class= "result result-bmi">protien intake = ${l} gm per day </p>`
    )),
    setTimeout(() => {
      formSection.classList.add("hide-form"),
        resultSection.classList.add("display-result"),
        loader.classList.add("hide-form");
    }, 500);
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(), (result.innerHTML = ""), reset(weight);
  });
