//-----------------------------------------------------------------------
// Third Version 
//-----------------------------------------------------------------------
const root = document.documentElement;
const inputs = document.querySelectorAll('input'); 

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
    } : null;
}

function updateGradientColors(input) {
    let colors = hexToRgb(input.value);
    root.style.setProperty(`--gradient-red-${input.dataset.position}`, colors.red);
    root.style.setProperty(`--gradient-blue-${input.dataset.position}`, colors.blue);
    root.style.setProperty(`--gradient-green-${input.dataset.position}`, colors.green);
}

function handleUpdate() {
    if (this.dataset.type == 'gradient-color') {
        updateGradientColors(this);
        return;
    }    
    root.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

//-----------------------------------------------------------------------
// Second Version 
//-----------------------------------------------------------------------

// We can simplify this code by using data attributes -- name and suffix
// The id is already equal to the variable name so we're good there
// I'll add an attribute called data-suffix for things like "deg" 
// LEFT THE CODE HERE AS I WROTE IT WITH COMMENTS AND STEPS COMMENTED OUT
/*const root = document.documentElement;
const inputs = document.querySelectorAll('input'); 

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
    } : null;
}
//console.log(hexToRgb('#ABCDEF'));

// input should be a 'this' object
function updateGradientColors(input) {
    let colors = hexToRgb(input.value);
    //console.log(colors);
    root.style.setProperty(`--gradient-red-${input.dataset.position}`, colors.red);
    root.style.setProperty(`--gradient-blue-${input.dataset.position}`, colors.blue);
    root.style.setProperty(`--gradient-green-${input.dataset.position}`, colors.green);
}

function handleUpdate() {
    //console.log(this.name);
    //console.log(this.value);
    //console.log(this.dataset.suffix);
    if (this.dataset.type == 'gradient-color') {
        //console.log('hi');
        updateGradientColors(this);
        return;
    }
    // console.log('made it further'); // this text isn't triggered 
    
    root.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.suffix}`);
    // testing color 
    // root.style.setProperty('--text-color', '#ff4311'); // this works
    // console.log(`${this.value}${this.dataset.suffix}`);
    // it output "#71ff25undefined" because i forgot to add the "data-" prefix to the dataset.suffix attribute 
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));*/

//-----------------------------------------------------------------------
// First version 
//-----------------------------------------------------------------------
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