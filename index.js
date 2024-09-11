window.addEventListener("scroll", function() {
    const header = document.getElementById("header2");
    const text = document.getElementById('headertext2');
    const button = document.getElementById('reserve')
    const icon = document.getElementById('dropdown')
    const link = this.document.getElementById('reserve-a')

    if (window.scrollY > 50) {
      header.style.backgroundColor = "#ffffff";  
      text.style.color = "black"
      button.style.backgroundColor = 'black'
      button.style.color = 'white'
      button.style.alignItems = 'center'
      button.style.justifyContent = "center"
      icon.style.display = "none"
      link.style.color = 'white'
      
    } else {
      header.style.backgroundColor = "black";  
      text.style.color = "white"
      button.style.backgroundColor = "white"
      button.style.color = "black"  
      button.style.alignItems = 'center'
      button.style.justifyContent = "center"
      icon.style.display = 'inline'
      link.style.color = 'black'
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

function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  if (sidebar.style.right === '0px') {
    sidebar.style.right = '-250px'; 
  } else {
    sidebar.style.right = '0px'; 
  }
}

if  (window.matchMedia("(max-width: 510px)").matches) {
var scrollBtn = document.getElementById("reserve");


window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.display = "block"; 
    scrollBtn.style.position = 'fixed'
    scrollBtn.style.width = '100%'
    scrollBtn.style.bottom = '10px'
    scrollBtn.style.right = '5px'
    
  }
   else if(document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
   
    
    

    
    
  }
  else{
    scrollBtn.style.position = "sticky"
    scrollBtn.style.right = "5px"
    scrollBtn.style.width = "20px"
    scrollBtn.style.bottom = "none"
    scrollBtn.style.left = "none"
  }
};


scrollBtn.onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
}
else{
  console.log('this is a tablet or a desktop')
}