const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const gender = document.querySelectorAll('input[name= gender]');

btn.addEventListener("click", (e) =>{
 e.preventDefault()
let genderValue = ""
let bloodVolume = 0
const heightValue = height.value/100
gender.forEach(val =>{
            if(val.checked){
              genderValue = val.value
            }

     })
     
if(genderValue === "female"){
    bloodVolume = (0.3561 * Math.pow(heightValue , 3)) + (0.03308 * weight.value) + 0.1833
}

if(genderValue === "male"){
    bloodVolume = (0.3669 * Math.pow(heightValue , 3)) + (0.03219 * weight.value) + 0.6041
}



loader.classList.remove("hide-form")
    result.innerHTML = `<p class = "result">all are in imperial units</p>
    <p class = "result result-bmi">your blood volume = ${roundDown(bloodVolume, 2)} litres</p>`

    setTimeout(() =>{
        loader.classList.add("hide-form")
        formSection.classList.add("hide-form")
        resultSection.classList.add("display-result")
    }, 500)
})

 
replay.addEventListener("click", (e)=>{ 
    e.preventDefault()
    reset(weight, height)
    result.innerHTML= ""
  })


function roundDown(number, decimals) {
    decimals = decimals || 0;
    return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
}