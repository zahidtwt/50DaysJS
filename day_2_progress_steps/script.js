const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let = currentActive = 1;

next.addEventListener("click", function () {
    if (currentActive < circles.length) {
        currentActive++;
    }

    update();

})

prev.addEventListener("click", function () {
    if (currentActive > 1) {
        currentActive--;
    }
    update();
})

const update = () => {

    ///enabling/disabling button

    if (currentActive === 1) {
        prev.disabled = true;
        next.disabled = false;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    // filling up circles
    for(const [i,circle] of circles.entries()){
        
        if(i < currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }

    }

    const bar = ((currentActive-1)/(circles.length-1)*100);
    progress.style.width = bar+"%";
   



}