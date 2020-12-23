const moles = document.getElementsByClassName("mole")
let score = 0;
var kick = new Audio("./assets/kick.wav")


document.getElementById("start").addEventListener("click", ()=>{
    window.setInterval(function(){
        let i = Math.floor(Math.random() * 6) ;
        moles[i].style.transform = "translateY(0px)";
        setTimeout(function() {moles[i].style.transform = "translateY(80px)"}, 800);}, 800);
        
      for (let j = 0; j < moles.length; j++) {
        moles[j].addEventListener("click", ()=>{
            kick.play()
            score++;
            document.getElementsByTagName("body")[0].style.cursor =  "url('./assets/hammer-hit.png'), default"
            document.getElementById("score").textContent  = score;
            moles[j].style.backgroundImage = "url('./assets/mole-hit.png')"
            setTimeout(function() {moles[j].style.backgroundImage = "url('./assets/mole.png')"}, 600);    
            setTimeout(function() {document.getElementsByTagName("body")[0].style.cursor =  "url('./assets/hammer.png'), default"}, 200);    

            
        } )
    }
    document.getElementById("reset").addEventListener("click", ()=>{
        score = 0;
        document.getElementById("score").textContent = score;
    })
    
})
