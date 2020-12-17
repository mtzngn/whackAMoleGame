const moles = document.getElementsByClassName("mole")


//        moles[i].style.transform = "translateY(0px)";

window.setInterval(function(){
    randomMole();
  }, 500);

function randomMole() {
    let i = Math.floor(Math.random() * 6) ;
    // moles[i].style.transform = "translateY(0px)";
}