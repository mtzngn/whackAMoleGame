const moles = document.getElementsByClassName("mole")
let score = 0;

window.setInterval(function(){

    let i = Math.floor(Math.random() * 6) ;
    moles[i].style.transform = "translateY(0px)";
    setTimeout(function() {moles[i].style.transform = "translateY(80px)"}, 1000);    
  }, 1000);


for (let j = 0; j < moles.length; j++) {
    moles[j].addEventListener("click", ()=>{
        score++;
        document.getElementById("score").textContent  = score;
    } )
}
