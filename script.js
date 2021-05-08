//Image slidein animation
setTimeout(function() {
  var image1 = document.getElementById('image1-js');
  image1.style.left = '0px';
  
  var image2 = document.getElementById('image2-js');
  image2.style.left = '0px';

  var textContainer = document.getElementById('container5');
  textContainer.style.left = '0px';
}, 1000);

//Header animation
setTimeout(function() {
  var header = document.getElementById('heading');
  header.style.top = '0px';
}, 1500);

//site banner animation part 1
setTimeout(function(){
  var mainHeader = document.getElementById('main-header');
  
  mainHeader.style.top = '0';
}, 2500);

//site banner animation part 2
setTimeout(function(){
  var subHeader = document.getElementById('sub-heading');
  
  subHeader.style.top = '0';
}, 3200);

//toggle nav-menu 
function toggleMenu(){
  var navMenu = document.getElementById('nav-menu');
  
  if(navMenu.style.visibility == 'hidden') {
    navMenu.style.visibility = 'visible';
    navMenu.style.opacity = '1';
  } else {
    navMenu.style.visibility = 'hidden';                  
    navMenu.style.opacity = '0';

  }
}

