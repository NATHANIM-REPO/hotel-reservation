window.addEventListener("scroll", function() {
    const header = document.getElementById("header2");
    const text = document.getElementById('headertext2');
    const button = document.getElementById('reserve')
    const icon = document.getElementById('dropdown')

    if (window.scrollY > 50) {
      header.style.backgroundColor = "#ffffff";  
      text.style.color = "black"
      button.style.backgroundColor = 'black'
      button.style.color = 'white'
      button.style.alignItems = 'center'
      button.style.justifyContent = "center"
      icon.style.display = "none"
      
    } else {
      header.style.backgroundColor = "black";  
      text.style.color = "white"
      button.style.backgroundColor = "white"
      button.style.color = "black"  
      button.style.alignItems = 'center'
      button.style.justifyContent = "center"
      icon.style.display = 'inline'
    }
  });



  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
 function currentSlide(n){
    showSlides(slideIndex = n);
 }

 function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        showSlides( slideIndex = slides.length);
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
 }

 function toggleText() {
  const textElement = document.getElementById("section-h5");
  const button = document.getElementById("seeMoreBtn");
  
  if (button.innerText === "See More") {
    textElement.style.display = "block"; 
    textElement.style.webkitLineClamp = "unset"; 
    button.innerText = "See Less";
  } else {
    textElement.style.display = "-webkit-box";
    textElement.style.webkitLineClamp = "4"; 
    button.innerText = "See More";
  }
}