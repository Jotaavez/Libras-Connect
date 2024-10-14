// Get modal element
var modal = document.getElementById("modal");
// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open modal with content
function openModal(modulo, videoUrl) {
  // Set title and video URL
  document.getElementById("modal-title").innerText = modulo;
  document.getElementById("modal-video").src = videoUrl;

  // Display modal
  modal.style.display = "block";
}

// Close modal on 'X' click
closeBtn.onclick = function() {
  modal.style.display = "none";
  document.getElementById("modal-video").src = ""; // Stop video
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("modal-video").src = ""; // Stop video
  }
}
