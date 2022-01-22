const formSection = document.querySelector(".wrapper"),
  resultSection = document.querySelector(".result-sect"),
  result = document.querySelector(".result"),
  loader = document.querySelector(".loader"),
  btn = document.querySelector(".btn"),
  replay = document.querySelector(".replay"),
  weight = document.querySelector("#weight"),
  height = document.querySelector("#height"),
  gender = document.querySelectorAll("input[name= gender]"),
  age = document.querySelector("#age"),
  activity = document.querySelector("#activity"),
  goals = document.querySelector("#goal");
let genderValue = "";
btn.addEventListener("click", (e) => {
  e.preventDefault(), errorChecking(gender, height, age, genderValue, weight);
}),
  replay.addEventListener("click", (e) => {
    e.preventDefault(),
      (result.innerHTML = ""),
      reset(height, gender, age, weight);
  });
const errorChecking = (e, t, a, r, l) => {
    e.forEach((e) => {
      e.checked && (r = e.value);
    });
    const s = goals.options[goals.selectedIndex],
      o = activity.options[activity.selectedIndex];
    t.value > 130 &&
    t.value < 230 &&
    a.value > 10 &&
    a.value < 100 &&
    r &&
    l.value > 10 &&
    l.value < 140
      ? getData(a, r, t, l, o, s)
      : alert.classList.remove("dismiss");
  },
  getData = async (e, t, a, r, l, s) => {
    try {
      const o = `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${e.value}&gender=${t}&height=${a.value}&weight=${r.value}&activitylevel=${l.value}&goal=${s.value}`,
        i = await fetch(o, {
          headers: {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key":
              "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca",
          },
        }),
        c = await i.json(),
        n = await c.data;
      console.log(n), loader.classList.remove("hide-form");
      const u = resultSection.clientHeight;
      window.scrollTo({ top: u, left: 0, behavior: "smooth" }),
        setTimeout(() => {
          dataChecker(c.data),
            formSection.classList.add("hide-form"),
            resultSection.classList.add("display-result"),
            (result.innerHTML = HtmlPurifier(
              `<h3 class= "result">Basic calorie= ${
                n.calorie
              } cal per day </h3>\n              <h3 class= "result">For balanced diet</h3>\n              <p class= "result result-bmi"> protein ${n.balanced.protein.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> fat ${n.balanced.fat.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> carbs ${n.balanced.carbs.toFixed(
                2
              )}gm </p>\n              <h3 class= "result">For high protein diet</h3>\n              <p class= "result result-bmi"> protein ${n.highprotein.protein.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> fat ${n.highprotein.fat.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> carbs ${n.highprotein.carbs.toFixed(
                2
              )}gm </p>\n              <h3 class= "result">For low carbs diet</h3>\n              <p class= "result result-bmi"> protein ${n.lowcarbs.protein.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> fat ${n.lowcarbs.fat.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> carbs ${n.lowcarbs.carbs.toFixed(
                2
              )}gm </p>\n              <h3 class= "result">For low fats diet</h3>\n              <p class= "result result-bmi"> protein ${n.lowfat.protein.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> fat ${n.lowfat.fat.toFixed(
                2
              )}gm </p>\n              <p class= "result result-bmi"> carbs ${n.lowfat.carbs.toFixed(
                2
              )}gm </p>\n              `
            )),
            loader.classList.add("hide-form");
        }, 500);
    } catch (e) {
      console.log(e);
    }
  };
