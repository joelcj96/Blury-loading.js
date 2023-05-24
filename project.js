const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

// Here i am gonna create a variable called Load with a value of '0',like it's gonna go from 0 to 100
let load = 0;

let int = setInterval(blurring, 30);


function blurring(){
       load++

    if(load > 99){
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0,100,19,0)
    // I need to do the same thing for the blur because i dont want it to be a 100px but like a 10px will do
    bg.style.filter = `blur(${scale(load,0,100, 10, 0)}px)`;

}
//i actually got this link from Sstack Overflow,it's actually fun to do some specific task like this 
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}