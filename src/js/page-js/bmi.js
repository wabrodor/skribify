//bmi


const formSection = document.querySelector(".wrapper")
const loader = document.querySelector(".loader")
const resultSection = document.querySelector(".result-sect")
const age = document.querySelector("#age")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const btn = document.querySelector(".btn")
const resultBmi = document.querySelector(".result-bmi")
const resultColor = document.querySelector(".result-color")
      
const percent = document.querySelector(".progress-bar");

const replay = document.querySelector(".replay");


btn.addEventListener("click", (e)=>{
  e.preventDefault()
  // alert class setting for invalid value
  if((height.value > 0 && height.value < 500) &&(weight.value > 0 && weight.value < 500) && (age.value > 0 && age.value < 100)) {
    loader.classList.remove("hide-form")
  //  scrollling bug fix
    const scrollHeight = resultSection.clientHeight

    window.scrollTo({
        top:scrollHeight,
        left:0,
        behavior:"smooth"
    })

// for animation
    setTimeout( ()=>{
      loader.classList.add("hide-form")
      formSection.classList.add("hide-form")
      resultSection.classList.add("display-result")
  
      let heightValue = height.value;
      let weightValue = weight.value;
    
      let calc = weightValue / (heightValue * heightValue)
      let result = (calc * 10000).toFixed(1);

      percent.innerText = result
      resultBmi.innerText = `your bmi = ${result}`
     
      
      if(result < 18.5){
          resultColor.innerText =  "UNDER weight"
          resultColor.style.color = "red"
      
      }
      if (result > 18.5) {
       resultColor.innerText =  "Normal Weight"
       resultColor.style.color = "green"
      
      }if(result > 24.9){
       resultColor.innerText =  "over Weight"
       resultColor.style.color = "yellow"
      }
      if(result > 30){
          resultColor.innerText =  "Obese"
          resultColor.style.color = "red"
      }
      
        percent.style.width = result + "%"
        percent.style.transition = "1.2s all ease-in";
    ; 
        result = 0;
    },500)

  

  }else{
    height.value = "";
    weight.value = "";
    age.value = "";
  alert.classList.remove("dismiss")
  return
  }
  })



replay.addEventListener("click", (e)=>{ 
  e.preventDefault()
  percent.innerText = "";
  percent.style.width = 0 + "%"
  resultColor.innerText = ""
  result = 0;
  reset(height, weight, age)
})

