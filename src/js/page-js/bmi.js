const formSection = document.querySelector(".wrapper"),
  loader = document.querySelector(".loader"),
  resultSection = document.querySelector(".result-sect"),
  age = document.querySelector("#age"),
  height = document.getElementById("height"),
  weight = document.getElementById("weight"),
  btn = document.querySelector(".btn"),
  resultBmi = document.querySelector(".result-bmi"),
  resultColor = document.querySelector(".result-color"),
  percent = document.querySelector(".progress-bar"),
  replay = document.querySelector(".replay");
btn.addEventListener("click", (e) => {
  if (
    (e.preventDefault(),
    !(
      height.value > 0 &&
      height.value < 500 &&
      weight.value > 0 &&
      weight.value < 500 &&
      age.value > 0 &&
      age.value < 100
    ))
  )
    return (
      (height.value = ""),
      (weight.value = ""),
      (age.value = ""),
      void alert.classList.remove("dismiss")
    );
  {
    loader.classList.remove("hide-form");
    const e = resultSection.clientHeight;
    window.scrollTo({ top: e, left: 0, behavior: "smooth" }),
      setTimeout(() => {
        loader.classList.add("hide-form"),
          formSection.classList.add("hide-form"),
          resultSection.classList.add("display-result");
        let e = height.value,
          t = (1e4 * (weight.value / (e * e))).toFixed(1);
        (percent.innerText = t),
          (resultBmi.innerText = `your bmi = ${t}`),
          t < 18.5 &&
            ((resultColor.innerText = "UNDER weight"),
            (resultColor.style.color = "red")),
          t > 18.5 &&
            ((resultColor.innerText = "Normal Weight"),
            (resultColor.style.color = "green")),
          t > 24.9 &&
            ((resultColor.innerText = "over Weight"),
            (resultColor.style.color = "yellow")),
          t > 30 &&
            ((resultColor.innerText = "Obese"),
            (resultColor.style.color = "red")),
          (percent.style.width = t + "%"),
          (percent.style.transition = "1.2s all ease-in"),
          (t = 0);
      }, 500);
  }
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(),
      (percent.innerText = ""),
      (percent.style.width = "0%"),
      (resultColor.innerText = ""),
      (result = 0),
      reset(height, weight, age);
  });
