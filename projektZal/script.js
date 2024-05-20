// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll('.obrazy');
var images2 =  document.querySelectorAll('.obrazy2');
var modalImg = document.getElementById("img01");
images.forEach(function(img){
  img.addEventListener('click', function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});
images2.forEach(function(img){
  img.addEventListener('click', function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
