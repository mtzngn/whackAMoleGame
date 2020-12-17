const moles = document.getElementsByClassName("mole")


window.setInterval(function(){

    let i = Math.floor(Math.random() * 6) ;
    moles[i].style.transform = "translateY(0px)";
    setTimeout(function() {moles[i].style.transform = "translateY(80px)"}, 1000);

    
  }, 1000);


