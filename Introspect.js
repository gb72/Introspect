// var images =[];
// var index = 0;


// function rightchangeimage()
// {
// 	var img = document.getElementById("photo");
// 	var over = document.getElementById("overimg");
	
// 	index=index+1;

// 	if(index >= images.length){
// 		index=0;
// 	}
// 	img.src = images[index];
// 	over.src = images[index];
// }
// function leftchangeimage()
// {
// 	var img= document.getElementById("photo");
// 	var over=document.getElementById("overimg");
// 	index=index-1;

// 	if(index <0){
// 		index=images.length-1;
// 	}
// 	img.src = images[index];
// 	over.src = images[index];
// }


// images[0]="IntrospectPhoto1.jpg";
// images[1]="IntrospectPhoto2.jpg";
// images[2]="IntrospectPhoto3.jpg";
// images[3]="IntrospectPhoto4.jpg";
// images[4]="IntrospectPhoto5.jpg";
// images[5]="IntrospectPhoto6.jpg";
// images[6]="IntrospectPhoto7.jpg";



// document.getElementById('buttonboxprevious').onclick = leftchangeimage;
// document.getElementById('buttonboxnext').onclick = rightchangeimage;


// function on() {
//     document.getElementById("overlay").style.display = "block";
// }

// function off() {
//     document.getElementById("overlay").style.display = "none";
// }


// document.getElementById('photo').onclick= on;
// document.getElementById('overlay').onclick= off;

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});