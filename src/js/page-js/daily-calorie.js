const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const gender = document.querySelector("#gender")
const age = document.querySelector("#age")
const activity = document.querySelector("#activity")
const option = activity.options[activity.selectedIndex]


btn.addEventListener("click", async (e)=>{
    e.preventDefault()
    let genderValue = gender.value.toLowerCase().trim()
    if(!(genderValue === "female" || genderValue === "male")){
      alert.classList.remove("dismiss")
      return
    }
    if ((height.value < 130  || height.value > 230 ||  height.value === "")) return
    // if ((genderValue = "female") || (genderValue = "male")) return
    try {
    const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age.value}&gender=${genderValue}&weight=${weight.value}&height=${height.value}&activitylevel=${option.value}`
    
        const request = await fetch(url, {
          "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca"
          }
        })
        
       const response = await request.json()
       const data = response.data
       loader.classList.remove("hide-form")
    
    setTimeout(() =>{
          
          formSection.classList.add("hide-form")
          resultSection.classList.add("display-result")
          result.innerHTML  = `<p class = "result result-bmi">Basic metabolic rate = ${data.BMR}</p>
          <p class = "result result-bmi">for extreme weight gain = ${data.goals["Extreme weight gain"].calory} calories</p>`
          loader.classList.add("hide-form")
    }, 500)
        
    }catch(error){
      console.log(error)
    }
    
    })


    replay.addEventListener("click", (e)=>{ 
        e.preventDefault()
        result.innerHTML= ""
        reset(height, gender, age, weight)
      })