const form = document.querySelector('form')

form.addEventListener('submit',function(e){
e.preventDefault();
const height = parseFloat(document.querySelector('#height').value)
const weight = parseFloat(document.querySelector('#weight').value)
const result = document.querySelector('#results')

if (isNaN(height) || height <= 0) {
  result.innerHTML = 'Please enter a valid height';
  return;
} 
else if (isNaN(weight) || weight <= 0) {
  result.innerHTML = 'Please enter a valid weight';
  return;
} 
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = ''
   if(bmi < 18.6) category = 'underweight';
   else if (bmi >= 18.6 ) category  = 'Normalweight';
   else if (bmi >= 24.9)  category = 'OverWeight'
   else category = 'obesety'
  result.innerHTML = `<span> bmi: ${bmi} (${category}) </span>`

}

});