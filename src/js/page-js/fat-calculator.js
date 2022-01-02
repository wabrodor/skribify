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
const neck = document.querySelector("#neck")
const waist = document.querySelector("#waist")
const hip = document.querySelector("#hip")


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
    const url = `https://fitness-calculator.p.rapidapi.com//bodyfat?age=${age.value}&gender=${genderValue}&weight=${weight.value}&height=${height.value}&neck=${neck.value}&waist=${waist.value}&hip=${hip.value}`
    
        const request = await fetch(url, {
          "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca"
          }
        })
        
       const response = await request.json()
       console.log(response.data["Body Fat Mass"])
       console.log(response.data)
       loader.classList.remove("hide-form")
        result.innerHTML = `<p class = "result result-bmi">Body Fat (U.S Navy method) = ${response.data["Body Fat (U.S. Navy Method)"]}%</p>
        <p class = "result result-bmi"> Body Fat Mass = ${response.data["Body Fat Mass"]} Kg</p>
        <p class = "result result-bmi"> Lean Body Mass =  ${response.data["Lean Body Mass"]}Kg </p>
        <p class = "result result-bmi"> Body Fat (BMI method) =  ${response.data["Body Fat (BMI method)"]}% </p>`
    
    setTimeout(() =>{
      if(response)
          loader.classList.add("hide-form")
          formSection.classList.add("hide-form")
          resultSection.classList.add("display-result")
        
    }, 1000)
        
    }catch(error){
      console.log(error)
    }
    
    })


    replay.addEventListener("click", (e)=>{ 
        e.preventDefault()
        result.innerHTML= ""
        reset(height, gender, age, weight, neck, hip, waist)
      })