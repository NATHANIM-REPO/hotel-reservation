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
      header.style.backgroundColor = "#514848";  
      text.style.color = "white"
      button.style.backgroundColor = "white"
      button.style.color = "black"  
      button.style.alignItems = 'center'
      button.style.justifyContent = "center"
      icon.style.display = 'inline'
    }
  });