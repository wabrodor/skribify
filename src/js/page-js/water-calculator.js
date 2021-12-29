const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const activity = document.querySelector("#activity")



btn.addEventListener("click", (e)=>{
    e.preventDefault()
  
    if ((weight.value < 0  || weight.value > 230 ||  weight.value === "")) return
    if ((activity.value < 0  || activity.value > 230 ||  activity.value === "")) return
 

const ounces = parseInt(calculateWater(weight.value, activity.value))

const litres = roundDown((ounces/33.82), 2)
const cups = roundDown((litres * 3.51), 2)



    loader.classList.remove("hide-form")
    result.innerHTML = `<p class = "result">all are in imperial units</p>
    <p class = "result result-bmi">in ounces = ${ounces}</p>
    <p class = "result  result-bmi"> in litres = ${litres}</p>
    <p class = "result result-bmi"> in cups = ${cups}</p>`

    
    setTimeout(() =>{
        loader.classList.add("hide-form")
        formSection.classList.add("hide-form")
        resultSection.classList.add("display-result")
    }, 1000)
        
    })
    
    replay.addEventListener("click", (e)=>{ 
      e.preventDefault()
      formSection.classList.remove("hide-form")
      resultSection.classList.remove("display-result")
      result.innerHTML= ""
      weight.value = ""
      activity.value = ""
    })

    function calculateWater(weight, activity){
        let results = (weight * 2.2) *2/3
        let daily_activity = (activity/30)*12
     return  results + daily_activity
       
    }

    function roundDown(number, decimals) {
        decimals = decimals || 0;
        return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
    }