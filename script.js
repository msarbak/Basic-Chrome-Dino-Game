var karakter = document.getElementById("karakter");
var blok = document.getElementById("blok");
var counter=0;
function zipla(){
    if(karakter.classList == "animate"){return}
    karakter.classList.add("animate");
    setTimeout(function(){
        karakter.classList.remove("animate");
    },400);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(blok).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        blok.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        blok.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);