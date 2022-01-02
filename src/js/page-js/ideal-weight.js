const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const height = document.querySelector("#height")
const gender = document.querySelector("#gender")

btn.addEventListener("click",  (e)=>{
e.preventDefault()
let genderValue = gender.value.toLowerCase().trim()
if(!(genderValue === "female" || genderValue === "male")){
  alert.classList.remove("dismiss")
  return
}

if ((height.value < 130  || height.value > 230 ||  height.value === "")) return
// if ((genderValue = "female") || (genderValue = "male")) return
getIdealWeightData(genderValue, height)

})


replay.addEventListener("click", (e)=>{ 
  e.preventDefault()
  result.innerHTML= ""
  reset(height, gender)
})

async function  getIdealWeightData(genderValue, height){
  try {
    const url = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${genderValue}&height=${height.value}`
    
        const request = await fetch(url, {
          "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca"
          }
        })
        
       const response = await request.json()
    
       loader.classList.remove("hide-form")
        result.innerHTML = `<p class = "result result-bmi">Robinson = ${response.data.Robinson}</p>
        <p class = "result  result-bmi">Miller = ${response.data.Miller}</p>
        <p class = "result result-bmi">Devine = ${response.data.Devine}</p>
        <p class = "result result-bmi">Hamwi = ${response.data.Hamwi}</p>`
    
    setTimeout(() =>{
      if(response)
          loader.classList.add("hide-form")
          formSection.classList.add("hide-form")
          resultSection.classList.add("display-result")
        
    }, 1000)
        
    }catch(error){
      console.log(error)
    }
}