const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  weight = document.querySelector("#weight"),
  height = document.querySelector("#height"),
  gender = document.querySelectorAll("input[name= gender]");
function roundDown(e, t) {
  return (t = t || 0), Math.floor(e * Math.pow(10, t)) / Math.pow(10, t);
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let t = "";
  if (
    (gender.forEach((e) => {
      e.checked && (t = e.value);
    }),
    !(
      height.value > 130 &&
      height.value < 230 &&
      t &&
      weight.value > 10 &&
      weight.value < 100
    ))
  )
    return void alert.classList.remove("dismiss");
  let r = 0;
  const l = height.value / 100;
  "female" === t &&
    (r = 0.3561 * Math.pow(l, 3) + 0.03308 * weight.value + 0.1833),
    "male" === t &&
      (r = 0.3669 * Math.pow(l, 3) + 0.03219 * weight.value + 0.6041),
    loader.classList.remove("hide-form"),
    (result.innerHTML = `<p class = "result result-bmi">your blood volume = ${roundDown(
      r,
      2
    )} litres</p>`),
    setTimeout(() => {
      loader.classList.add("hide-form"),
        formSection.classList.add("hide-form"),
        resultSection.classList.add("display-result");
    }, 500);
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(), reset(weight, height), (result.innerHTML = "");
  });
