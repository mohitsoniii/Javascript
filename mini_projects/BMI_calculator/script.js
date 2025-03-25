const height = document.getElementById('height')
const weight = document.getElementById('weight')
let result = document.getElementById('result')

let bmi = Number(weight.innerText)/(Number(height.innerText))**2

result.innerText = bmi