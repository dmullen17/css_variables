console.log('hi');
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

let color = document.querySelector(`[name="bkg-color"]`); 
color.addEventListener('change', function(event) {
    document.documentElement.style.setProperty('--background-color', this.value);
})