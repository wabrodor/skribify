// constants

const formSection = document.querySelector(".wrapper")
const resultSection = document.querySelector(".result-sect")
const result = document.querySelector(".result")
const loader = document.querySelector(".loader")
const btn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const gender = document.querySelectorAll('input[name= gender]');
const age = document.querySelector("#age")
const activity = document.querySelector("#activity")
const goals = document.querySelector("#goal")

let genderValue = ""


// eventlisteners

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    errorChecking(gender, height, age, genderValue, weight)
    })


replay.addEventListener("click", (e)=>{ 
        e.preventDefault()
        result.innerHTML= ""
        reset(height, gender, age, weight)
      })


  // functions

      
     const  errorChecking = (gender,height, age, genderValue, weight) => {

        gender.forEach(val  =>{
          if(val.checked){
            genderValue = val.value
          }
        })
    
        const goalsOptions = goals.options[goals.selectedIndex]
        const activityOptions = activity.options[activity.selectedIndex]
        if (!(height.value > 130 && height.value < 230) || !(age.value > 10 && age.value < 100)  || (!genderValue) || !(weight.value >10 && weight.value < 140)){
          alert.classList.remove("dismiss")
          return
        }else{
          
          getData(age, genderValue, height, weight, activityOptions, goalsOptions)
        }
        
      }



      const getData = async (age, genderValue, height, weight, activityOptions, goalsOptions) => {

        try {
        const url = `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age.value}&gender=${genderValue}&height=${height.value}&weight=${weight.value}&activitylevel=${activityOptions.value}&goal=${goalsOptions.value}`
    
      
        
            const request = await fetch(url, {
              "headers": {
                "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
                "x-rapidapi-key": "74df0ed0e5msh4aeaf247442fb6fp1a666fjsn4b179e3a70ca"
              }
            })
            
           const response = await request.json()
           const data = await response.data
    
           console.log(data)
           loader.classList.remove("hide-form")
    
           const scrollHeight = resultSection.clientHeight
    
           window.scrollTo({
               top:scrollHeight,
               left:0,
               behavior:"smooth"
           })
        
        setTimeout(() =>{
              if(data)
              console.log(data)
              formSection.classList.add("hide-form")
              resultSection.classList.add("display-result")
              result.innerHTML  = HtmlPurifier(`<h3 class= "result">Basic calorie= ${data.calorie} cal per day </h3>
              <h3 class= "result">For balanced diet</h3>
              <p class= "result result-bmi"> protein ${(data.balanced.protein).toFixed(2)}gm </p>
              <p class= "result result-bmi"> fat ${(data.balanced.fat).toFixed(2)}gm </p>
              <p class= "result result-bmi"> carbs ${(data.balanced.carbs).toFixed(2)}gm </p>
              <h3 class= "result">For high protein diet</h3>
              <p class= "result result-bmi"> protein ${(data.highprotein.protein).toFixed(2)}gm </p>
              <p class= "result result-bmi"> fat ${(data.highprotein.fat).toFixed(2)}gm </p>
              <p class= "result result-bmi"> carbs ${(data.highprotein.carbs).toFixed(2)}gm </p>
              <h3 class= "result">For low carbs diet</h3>
              <p class= "result result-bmi"> protein ${(data.lowcarbs.protein).toFixed(2)}gm </p>
              <p class= "result result-bmi"> fat ${(data.lowcarbs.fat).toFixed(2)}gm </p>
              <p class= "result result-bmi"> carbs ${(data.lowcarbs.carbs).toFixed(2)}gm </p>
              <h3 class= "result">For low fats diet</h3>
              <p class= "result result-bmi"> protein ${(data.lowfat.protein).toFixed(2)}gm </p>
              <p class= "result result-bmi"> fat ${(data.lowfat.fat).toFixed(2)}gm </p>
              <p class= "result result-bmi"> carbs ${(data.lowfat.carbs).toFixed(2)}gm </p>
              `);
              loader.classList.add("hide-form")
        }, 500)
            
        }catch(error){
          console.log(error)
        }
        
      }