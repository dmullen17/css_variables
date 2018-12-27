/*
let blur = document.querySelector(`[name="blur"]`); 
// console.log(blur);
blur.addEventListener('change', function(event) {
    console.log(event);
    console.log(this.value); //number between 0:100
    document.documentElement.style.setProperty('--blur', `${this.value}px`);
})

let spacing = document.querySelector(`[name="padding"]`);
spacing.addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--padding', `${this.value}px`);
})

let color = document.querySelector(`[name="background-color"]`); 
color.addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--background-color', this.value);
})
*/


//---------------------------------------------------------------------------------
// My second solution: 
// Wrap the <input> elements in a div with class "controls"
/*
const inputs = document.querySelectorAll('.controls input'); 
console.log(inputs);
inputs.forEach(el => el.addEventListener('change', function(event) {
    console.log(event);
    console.log(this);
    // We need to set the 'name' attribute on inputs equal to the CSS variable names for this logic to work
    console.log(this.name);
    // Add px to the value if necessary 
    const value = this.name === 'background-color' ? this.value : `${this.value}px`;
    document.documentElement.style.setProperty(`--${this.name}`, value);
}))
console.log(inputs);
*/
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// Wes Bos Solution
const inputs = document.querySelectorAll('.controls input');

function handleUpate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpate));

//---------------------------------------------------------------------------------
