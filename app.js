console.log('hi');
let blur = document.querySelector(`[name="blur"]`); 
// console.log(blur);
blur.addEventListener('change', function(event) {
    console.log(event);
    console.log(this.value); //number between 0:100
    document.documentElement.style.setProperty('--blur', `${this.value}px`);
})