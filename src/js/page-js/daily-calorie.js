const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const gen = document.querySelectorAll('input[name= gender]');
const age = document.querySelector("#age")
const activity = document.querySelector("#activity")


btn.addEventListener("click", async (e)=>{
    e.preventDefault()

    const option = activity.options[activity.selectedIndex]

    const optionValue = option.value
    let genderValue = "";

    gen.forEach(val =>{
      if(val.checked){
      genderValue = val.value
      }
     })

    if (!(height.value > 130  && height.value < 230) || (!genderValue) || !(weight.value >10 && weight.value < 200) || !(age.value >10 && age.value < 80) || !(optionValue)){
      alert.classList.remove("dismiss")
      return
    } 

    const scrollHeight = resultSection.clientHeight

    window.scrollTo({
        top:scrollHeight,
        left:0,
        behavior:"smooth"
    })

    try {
    const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age.value}&gender=${genderValue}&weight=${weight.value}&height=${height.value}&activitylevel=${optionValue}`
    
        const request = await fetch(url, {
          headers: {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key":
              "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca",
          },
        });
        
       const response = await request.json()
       const data = response.data

       console.log(data)
       loader.classList.remove("hide-form")
    
    setTimeout(() =>{
          
          formSection.classList.add("hide-form")
          dataChecker(data)
          resultSection.classList.add("display-result")
          result.innerHTML  =  HtmlPurifier(`<p class = "result result-bmi">Basic metabolic rate = ${data.BMR}</p>
          <p class = "result result-bmi">for extreme weight gain = ${data.goals["Extreme weight gain"].calory}calories per day</p>
          <p class = "result result-bmi">for Extreme weight loss = ${data.goals["Extreme weight loss"].calory} calories per day</p>
          <p class = "result result-bmi">for Mild weight gain" = ${data.goals["Mild weight gain"].calory} calories per day</p>
          <p class = "result result-bmi">for Mild weight los = ${data.goals["Mild weight loss"].calory} calories per day</p>
          <p class = "result result-bmi">for weight gain = ${data.goals["Weight gain"].calory} calories per day</p>
          <p class = "result result-bmi">for  weight loss = ${data.goals["Weight loss"].calory} calories per day</p>`)
          
          loader.classList.add("hide-form")
    }, 500)
        
    }catch(error){
      console.log(error);
    }
    
    })


    replay.addEventListener("click", (e)=>{ 
        e.preventDefault()
        result.innerHTML= ""
        reset(height, age, weight)
      })