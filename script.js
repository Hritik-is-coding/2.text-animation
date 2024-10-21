const heading = document.querySelector(".heading");
const text = heading.textContent;
const alpha = text.split("");
heading.textContent = "";

// wrap each letter and preserve spaces
for(let i=0;i<alpha.length;i++){
    if(alpha[i] === ""){
        heading.innerHTML += "<span>&nbsp</span>"; // for spaces
    }

    else{
        heading.innerHTML += "<span>" + alpha[i] + "</span>"
    }
}

let count = 0;
let timer = setInterval(onArrival,70);

function onArrival(){
    const span = heading.querySelectorAll("span")[count];
    span.classList.add("fade");
    count++;

    // stop the timer when all letters are animated 
    if(count === alpha.length){
        clearInterval(timer);
    }

}