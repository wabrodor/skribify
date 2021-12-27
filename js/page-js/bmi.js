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
  if(!(age.value > 0 && age.value < 100)) return
  if(height.value > 0 && weight.value > 0) {
    loader.classList.remove("hide-form")

    setTimeout( ()=>{
      loader.classList.add("hide-form")
      formSection.classList.add("hide-form")
      resultSection.classList.add("display-result")
  
      let heightValue = height.value;
      let weightValue = weight.value;
    
         let calc = weightValue / (heightValue * heightValue)
       let result = (calc * 10000).toFixed(1);
      //    console.log(result.toFixed(1))
      percent.textContent = result
      resultBmi.textContent = `your bmi = ${result}`
    
      
      if(result < 18.5){
          resultColor.textContent =  "UNDER weight"
          resultColor.style.color = "red"
      
      }
      if (result > 18.5) {
       resultColor.textContent =  "Normal Weight"
       resultColor.style.color = "green"
      
      }if(result > 24.9){
       resultColor.textContent =  "over Weight"
       resultColor.style.color = "yellow"
      }
      if(result > 30){
          resultColor.textContent =  "Obese"
          resultColor.style.color = "red"
      }
      
        percent.style.width = result + "%"
        percent.style.transition = "1.2s all ease-in";
        result = 0;
    },2000)

  }else{
   alert("value must be greater than 0")
   height.value = "";
   weight.value = "";
   age.value = "";
  }
  })



replay.addEventListener("click", (e)=>{ 
  e.preventDefault()
  formSection.classList.remove("hide-form")
  resultSection.classList.remove("display-result")
  result = 0;
  percent.textContent = "";
  percent.style.width = 0 + "%"
  resultColor.textContent = ""
  height.value = ""
  weight.value = ""
  age.value = ""
})