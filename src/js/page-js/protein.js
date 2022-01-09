const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const activity = document.querySelector("#activity");


btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const option = activity.options[activity.selectedIndex]

    if(!(weight.value > 20 && weight.value < 180)){

      alert.classList.remove("dismiss")
      return
    }

    loader.classList.remove("hide-form")

    const scrollHeight = resultSection.clientHeight

 window.scrollTo({
     top:scrollHeight,
     left:0,
     behavior:"smooth"
 })
    let protein = 0

    if(option.value === "1"){
      protein = 0.8 * weight.value
    }


   else if(option.value === "2"){
        protein = 1.2 * weight.value
    }
   else if(option.value === "3"){
        protein = 1.4 * weight.value
    }

    else if(option.value === "4"){
        protein = 1.8 * weight.value
    }

    result.innerHTML= HtmlPurifier(`<p class= "result result-bmi">protien intake = ${protein} gm per day </p>`)

    setTimeout(() =>{
            formSection.classList.add("hide-form")
            resultSection.classList.add("display-result")
            loader.classList.add("hide-form")
      }, 500)

})



replay.addEventListener("click", (e)=>{ 
    e.preventDefault()
    result.innerHTML= ""
    reset(weight)
  })


