window.addEventListener("scroll", function(){
    const header2 = this.document.getElementsByClassName('header2')
    if(window.scrollY > 50){
        header2.style.backgroundcolor = "white"
    }
    else{
        header2.style.backgroundcolor = "rgb(81, 72, 72);"
    }
})