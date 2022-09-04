document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  var modal1 = document.getElementById("myModal1");
  // Get the button that opens the modal
  var btn1 = document.getElementById("myBtn1");
  // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close1")[0];
  // When the user clicks the button, open the modal
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal1.style.display = "none";
  }

  var modal2 = document.getElementById("myModal2");
  // Get the button that opens the modal
  var btn2 = document.getElementById("myBtn2");
  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("close2")[0];
  // When the user clicks the button, open the modal
  btn2.onclick = function() {
    modal2.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
    modal2.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    else if(event.target == modal1){
      modal1.style.display = "none";
    }else if(event.target == modal2){
      modal2.style.display = "none";
    }
  }

})
