 // Get the button
 let mybutton = document.getElementById("scroll-to-top");
            
 // When the user scrolls down 200px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // Khi click vào button back to top thì quay lại đầu trang
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }