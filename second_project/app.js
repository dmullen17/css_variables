/*let root = document.documentElement;
let gradientStart = document.querySelector('#gradient-start');
let gradientEnd = document.querySelector('#gradient-end');
let angle = document.querySelector('#angle');

//console.log(gradientStart);


gradientStart.addEventListener('change', function() {
    //console.log(this); // why is it logging the window?
    //console.log(this.value);
    root.style.setProperty('--gradient-start', this.value);
});

gradientEnd.addEventListener('change', function() {
    root.style.setProperty('--gradient-end', this.value);
})

angle.addEventListener('change', function() {
    root.style.setProperty('--angle', `${this.value}deg`);
})*/

// We can simplify this code by using data attributes -- name and suffix
// The id is already equal to the variable name so we're good there
// I'll add an attribute called data-suffix for things like "deg" 
const root = document.documentElement;
const inputs = document.querySelectorAll('input'); 
function handleUpdate() {
    console.log(this.name);
    console.log(this.value);
    //console.log(this.dataset.suffix);
    root.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.suffix}`);
    // testing color 
    // root.style.setProperty('--text-color', '#ff4311'); // this works
    // console.log(`${this.value}${this.dataset.suffix}`);
    // it output "#71ff25undefined" because i forgot to add the "data-" prefix to the dataset.suffix attribute 
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));