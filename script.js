var vid = document.getElementById("myVideo"); 
var text = document.getElementById("text"); 
var jmlLogo = document.getElementById("jmlLogo");
var myPage = document.getElementById("myPage");
var sortArts = document.getElementById("sortArts");
var logoSwitch = true;

function playVid() { 
  vid.play(); 
  text.innerHTML = "Start Video";
} 

function pauseVid() { 
  vid.play(); 
  text.innerHTML = "Stop Video";
} 

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}  

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".header-right a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
    
  });
})

function changeLogo() {
  if (logoSwitch == true){
    jmlLogo.src = 'jml-logo-dark.png';
    logoSwitch = false;
    myPage.style.backgroundColor = 'white';
    myPage.style.backgroundImage = 'jml-bg1.png';
    sortArts.style.backgroundColor = '#51504D';
  } else if (logoSwitch == false) {
    jmlLogo.src = 'jml-logo-light.png';
    logoSwitch = true;
    myPage.style.backgroundColor = '#FFEFD9';
    myPage.style.backgroundImage = 'jml-bg.png';
    sortArts.style.backgroundColor = 'white';
  }
}

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();

  $( ".hamburger" ).click(function() {
  $( ".header" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".header" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });

  $( ".all-section" ).hide();
  $( ".illustration-section" ).hide();
  $( ".animation-section" ).show();
  $( ".gameasset-section" ).hide();
  $( ".invitation-section" ).hide();
  $( ".logo-section" ).hide();

  $( ".allArts" ).click(function() {
  // $( "div" ).slideToggle( "slow", function() {
  $( ".illustration-section" ).hide();
  $( ".animation-section" ).hide();
  $( ".logo-section" ).hide();
  $( ".all-section" ).show();
  // });
  });



  $( ".animationArts" ).click(function() {
  // $( "" ).slideToggle( "slow", function() {
  $( ".illustration-section" ).hide();
  $( ".animation-section" ).show();
  $( ".gameasset-section" ).hide();
  $( ".invitation-section" ).hide();
  $( ".logo-section" ).hide();
  $( ".all-section" ).hide();
  // });
  });

  $( ".gameassetArts" ).click(function() {
    // $( "" ).slideToggle( "slow", function() {
    $( ".illustration-section" ).hide();
    $( ".animation-section" ).hide();
    $( ".gameasset-section" ).show();
    $( ".invitation-section" ).hide();
    $( ".logo-section" ).hide();
    $( ".all-section" ).hide();
    // });
  });

  $( ".illustrationArts" ).click(function() {
  // $( "" ).slideToggle( "slow", function() {
  $( ".illustration-section" ).show();
  $( ".animation-section" ).hide();
  $( ".gameasset-section" ).hide();
  $( ".invitation-section" ).hide();
  $( ".logo-section" ).hide();
  $( ".all-section" ).hide();
  // });
  });

  $( ".invitationArts" ).click(function() {
  // $( "" ).slideToggle( "slow", function() {
  $( ".illustration-section" ).hide();
  $( ".animation-section" ).hide();
  $( ".gameasset-section" ).hide();
  $( ".invitation-section" ).show();
  $( ".logo-section" ).hide();
  $( ".all-section" ).hide();
  // });
  });
  
  $( ".logoArts" ).click(function() {
    // $( "" ).slideToggle( "slow", function() {
    $( ".illustration-section" ).hide();
    $( ".animation-section" ).hide();
    $( ".gameasset-section" ).hide();
    $( ".invitation-section" ).hide();
    $( ".logo-section" ).show();
    $( ".all-section" ).hide();
    // });
    });
    
  });

  // Get the container element
var btnContainer = document.getElementById("myNavbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("sortArtsbtn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");

    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace("active1", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active1";
  });
}