const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const gender = document.querySelectorAll("input[name = gender]")
const age = document.querySelector("#age")
const neck = document.querySelector("#neck")
const waist = document.querySelector("#waist")
const hip = document.querySelector("#hip")


let genderValue = ""

btn.addEventListener("click", async (e)=>{
    e.preventDefault()

    gender.forEach(val =>{
      if(val.checked){
      genderValue = val.value
      }
     })

  
     if (!(height.value > 130 && height.value < 230) || !(genderValue) || !(weight.value >10 && weight.value < 200) || !(neck.value >20 && neck.value < 80) || !(waist.value >40 && waist.value < 130) || !(hip.value >40 && hip.value < 130) ||  !(age.value >10 && age.value < 80)){
      alert.classList.remove("dismiss")
      return
    }
 //  scrollling bug fix
 const scrollHeight = resultSection.clientHeight

 window.scrollTo({
     top:scrollHeight,
     left:0,
     behavior:"smooth"
 })



    try {
    const url = `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age.value}&gender=${genderValue}&weight=${weight.value}&height=${height.value}&neck=${neck.value}&waist=${waist.value}&hip=${hip.value}`
    
        const request = await fetch(url, {
          "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca"
          }
        })
        
       const response = await request.json()
       loader.classList.remove("hide-form")
        result.innerHTML =  HtmlPurifier(`<p class = "result result-bmi">Body Fat (U.S Navy method) = ${response.data["Body Fat (U.S. Navy Method)"]}%</p>
        <p class = "result result-bmi"> Body Fat Mass = ${response.data["Body Fat Mass"]} Kg</p>
        <p class = "result result-bmi"> Lean Body Mass =  ${response.data["Lean Body Mass"]}Kg </p>
        <p class = "result result-bmi"> Body Fat (BMI method) =  ${response.data["Body Fat (BMI method)"]}% </p>`)
    
    setTimeout(() =>{
      if(response)
          loader.classList.add("hide-form")
          formSection.classList.add("hide-form")
          resultSection.classList.add("display-result")
        
    }, 500)
        
    }catch(error){
      console.log(error)
    }
    
    })


    replay.addEventListener("click", (e)=>{ 
        e.preventDefault()
        result.innerHTML= ""
        reset(height, gender, age, weight, neck, hip, waist)
      })