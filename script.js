const form = document.querySelector('form')
form.addEventListener("submit",function(e){
  e.preventDefault();
 const height =  parseInt(document.querySelector("#height").value)
 const weight =  parseInt(document.querySelector("#weight").value)
    // const height = parseInt(document.getElementById("height").value)
    // const weight = parseInt(document.getElementById("weight").value)
    // const result = document.getElementById("result")
    const result = document.querySelector("#results")

   
 if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height: ${height} `;

} else if (weight === "" || weight <= 0 || isNaN(weight)) {
   result.innerHTML = `Please give a valid weight: ${weight} `;
} 
else  {
    // Calculate BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    
    // Determine BMI category
    let category = '';
    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi > 24.9) {
      category = 'Overweight';
    } else {
      category = 'Normal weight';
    }
    
    result.innerHTML = `<span>Your BMI: ${bmi}</span><br><span>Category: ${category}</span>`;
  }
}

);


