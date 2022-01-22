const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  weight = document.querySelector("#weight"),
  activity = document.querySelector("#activity");
function calculateWater(e, t) {
  return (2.2 * e * 2) / 3 + (t / 30) * 12;
}
function roundDown(e, t) {
  return (t = t || 0), Math.floor(e * Math.pow(10, t)) / Math.pow(10, t);
}
btn.addEventListener("click", (e) => {
  if (
    (e.preventDefault(),
    weight.value < 0 ||
      weight.value > 230 ||
      "" === weight.value ||
      activity.value < 0 ||
      activity.value > 230 ||
      "" === activity.value)
  )
    return void alert.classList.remove("dismiss");
  const t = parseInt(calculateWater(weight.value, activity.value)),
    r = roundDown(t / 33.82, 2),
    l = roundDown(3.51 * r, 2);
  loader.classList.remove("hide-form"),
    (result.innerHTML = HtmlPurifier(
      `<p class = "result">all are in imperial units</p>\n    <p class = "result result-bmi">in ounces = ${t}</p>\n    <p class = "result  result-bmi"> in litres = ${r}</p>\n    <p class = "result result-bmi"> in cups = ${l} cups</p>`
    ));
  const i = resultSection.clientHeight;
  window.scrollTo({ top: i, left: 0, behavior: "smooth" }),
    setTimeout(() => {
      loader.classList.add("hide-form"),
        formSection.classList.add("hide-form"),
        resultSection.classList.add("display-result");
    }, 500);
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(), reset(weight, activity), (result.innerHTML = "");
  });
