document.getElementById('submitBtn').addEventListener('click', function() {
  let bgPic = document.getElementById('bgImage').value;
  let picture = document.getElementById('profilePic').files[0];
  let fstName = document.getElementById('firstName').value;
  let lstName = document.getElementById('lastName').value;

  
  if (bgPic === 'Yes') {
    let randomImage = "https://source.unsplash.com/random";
    document.getElementById('backImage').src = randomImage;
  } else if (bgPic === 'No') {
    let noImageURL = "null"; 
    document.getElementById('backImage').src = noImageURL;
  
  }

  
  if (picture) {
    let reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('profilePic2').src = event.target.result;
    };
    reader.readAsDataURL(picture);
  }

  
  document.getElementById('fname').textContent = fstName;
  document.getElementById('lname').textContent = lstName;
});




function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "210px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }