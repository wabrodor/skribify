const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const height = document.querySelector("#height")
const gender = document.querySelectorAll('input[name= gender]');

let genderValue =""

btn.addEventListener("click",  (e)=>{
e.preventDefault()
gender.forEach(val  =>{
  if(val.checked){
    genderValue = val.value
  }
})

if (!(height.value > 130 && height.value < 230) ||(!genderValue)){
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

getIdealWeightData(genderValue, height)

})


replay.addEventListener("click", (e)=>{ 
  e.preventDefault()
  result.innerHTML= ""
  reset(height, genderValue)
})

async function  getIdealWeightData(genderValue, height){
  try {
    loader.classList.remove("hide-form")
    const url = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${genderValue}&height=${height.value}`
    
        const request = await fetch(url, {
          "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca"
          }
        })
        
       const response = await request.json()
    
   
        result.innerHTML = HtmlPurifier(`<p class = "result result-bmi">Robinson = ${response.data.Robinson}kg</p>
        <p class = "result  result-bmi">Miller = ${response.data.Miller}kg</p>
        <p class = "result result-bmi">Devine = ${response.data.Devine}kg</p>
        <p class = "result result-bmi">Hamwi = ${response.data.Hamwi}kg</p>`)
    
    setTimeout(() =>{
      if(response)
          formSection.classList.add("hide-form")
          resultSection.classList.add("display-result")
          loader.classList.add("hide-form")
    }, 500)
        
    }catch(error){
      loader.classList.add("hide-form")
      alert.classList.remove("dismiss")
      return
    }
}