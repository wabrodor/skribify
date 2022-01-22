const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  weight = document.querySelector("#weight"),
  height = document.querySelector("#height"),
  gender = document.querySelectorAll("input[name = gender]"),
  age = document.querySelector("#age"),
  neck = document.querySelector("#neck"),
  waist = document.querySelector("#waist"),
  hip = document.querySelector("#hip");
let genderValue = "";
btn.addEventListener("click", async (e) => {
  if (
    (e.preventDefault(),
    gender.forEach((e) => {
      e.checked && (genderValue = e.value);
    }),
    !(
      height.value > 130 &&
      height.value < 230 &&
      genderValue &&
      weight.value > 10 &&
      weight.value < 200 &&
      neck.value > 20 &&
      neck.value < 80 &&
      waist.value > 40 &&
      waist.value < 130 &&
      hip.value > 40 &&
      hip.value < 130 &&
      age.value > 10 &&
      age.value < 80
    ))
  )
    return void alert.classList.remove("dismiss");
  const t = resultSection.clientHeight;
  window.scrollTo({ top: t, left: 0, behavior: "smooth" });
  try {
    const e = `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age.value}&gender=${genderValue}&weight=${weight.value}&height=${height.value}&neck=${neck.value}&waist=${waist.value}&hip=${hip.value}`,
      t = await fetch(e, {
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca",
        },
      }),
      a = await t.json();
    loader.classList.remove("hide-form"),
      dataChecker(a.data),
      (result.innerHTML = HtmlPurifier(
        `<p class = "result result-bmi">Body Fat (U.S Navy method) = ${a.data["Body Fat (U.S. Navy Method)"]}%</p>\n        <p class = "result result-bmi"> Body Fat Mass = ${a.data["Body Fat Mass"]} Kg</p>\n        <p class = "result result-bmi"> Lean Body Mass =  ${a.data["Lean Body Mass"]}Kg </p>\n        <p class = "result result-bmi"> Body Fat (BMI method) =  ${a.data["Body Fat (BMI method)"]}% </p>`
      )),
      setTimeout(() => {
        loader.classList.add("hide-form"),
          formSection.classList.add("hide-form"),
          resultSection.classList.add("display-result");
      }, 500);
  } catch (e) {
    console.log("error");
  }
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(),
      (result.innerHTML = ""),
      reset(height, gender, age, weight, neck, hip, waist);
  });
