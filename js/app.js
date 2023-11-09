let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  yoga = document.querySelector("#yoga"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();







var action="click";
var speed="500";
var sr1 = document.getElementById('im1');
var sr2 = document.getElementById('im2');
var sr3 = document.getElementById('im3');
var sr4 = document.getElementById('im4');
var sr5 = document.getElementById('im5');
var c= document.getElementsByClassName('.r8').children;


$(document).ready(function() {

// Hide all panels
let panels = $("#services__accordion > .accordion > .accordion__body").hide()

// Hide all accordion images
    images = $("#accordion__img > img").hide();

// Show first panel at start
panels.first().show();

// Show first accordion image at start
images.first().show();

// On click of a panel title

$("#services__accordion .accordion  h3").click(function() {
  // The panel is not the H3, but its parent.
  let panel = $(this).parent(),
    // The panel has an attribute that will tell me which image
    //  I want to manipulate. This is because I've given the
    //  images ID's to match. Kind of brittle, but it will work.
    tabName = panel.attr("tab-name"),
    image = $("#" + tabName + "-img");

  // Slide Up all other panels
  panels.slideUp();
  images.slideUp();

  // Slide Down target panel, and target image.
  panel.find(".accordion__body").slideDown();
  image.slideDown();

  return false;
});

















    // Question handler

  

    $('#1').on(action, function() {
      // Get next element
      $(this).next()
          .slideToggle(speed)
      // Select all other answers
              .siblings('li.a')
                  .slideUp();
                  
                  if(sr1.style.display = 'hidden'){
                  sr1.style.display = 'block';}
                  else{
                  sr1.style.display = 'hidden';}
                
  });
  $('#2').on(action, function() {
    // Get next element
    $(this).next()
        .slideToggle(speed)
    // Select all other answers
            .siblings('li.a')
                .slideUp();
                sr2.style.display = 'block';
              
});
$('#3').on(action, function() {
  // Get next element
  $(this).next()
      .slideToggle(speed)
  // Select all other answers
          .siblings('li.a')
              .slideUp();
              sr3.style.display = 'block';
            
});
$('#4').on(action, function() {
  // Get next element
  $(this).next()
      .slideToggle(speed)
  // Select all other answers
          .siblings('li.a')
              .slideUp();
              sr4.style.display = 'block';
            
});
$('#5').on(action, function() {
  // Get next element
  $(this).next()
      .slideToggle(speed)
  // Select all other answers
          .siblings('li.a')
              .slideUp();
              sr5.style.display = 'block';
            
});
$('#6').on(action, function() {
  // Get next element
  $(this).next()
      .slideToggle(speed)
  // Select all other answers
          .siblings('li.a')
              .slideUp();
              sr6.style.display = 'block';
            
});







});


let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal)
      .style.display = "block";
  }
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});
window.onclick = function(event) {
  if(event.target.className === "modal") {
    event.target.style.display = "none";
  }
}
 


