const panels = document.querySelectorAll(".panel");

for(const panel of panels){
    panel.addEventListener("click", function(){
        removeActive();
        panel.classList.add("active");
    })
}

function removeActive(){
    for( panel of panels){
        panel.classList.remove("active");
    }
}