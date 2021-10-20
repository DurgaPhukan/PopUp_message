// pop up functioning

// Display pop up after 1 sec and hide after 10 sec
window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },1000)

        setTimeout(
            function open(event){
                document.querySelector(".popup").style.display = "none";
            },10000)
})


// Hide pop up on clicking the button

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
});