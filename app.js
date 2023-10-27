document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById('submitBtn').addEventListener('click', function() {
      
      let bgPic = document.getElementById('bgImage').value;
      let picture = document.getElementById('profilePic').files[0];
      let fstName = document.getElementById('firstName').value;
      let lstName = document.getElementById('lastName').value;
      let role = document.getElementById('role1').value;
      let cityText = document.getElementById('city').value;
      let country1 = document.getElementById('country').value;
    //   let socialVisible = document.getElementById('socialVisible');
    //   let content = document.getElementById('icons');

      
      if (bgPic === 'Yes') {
          let randomImage = "https://source.unsplash.com/random";
          document.getElementById('backImage').src = randomImage;
      } else if (bgPic === 'No') {
          let noImageURL = 'null';
          document.getElementById('backImage').src = noImageURL;
      }

      
      if (picture) {
          let reader = new FileReader();
          reader.onload = function(event) {
              document.getElementById('profilePic2').src = event.target.result;
          };
          reader.readAsDataURL(picture);
      }

    //   if (socialVisible.value === 'yes') {
    //     content.style.display = 'block';
    //     content.style.backgroundColor = 'rgb(158, 185, 185)';
    //     content.style.width = '10%';
    //     content.style.height = 'auto';
    //     content.style.position = 'relative';
    //     content.style.float = 'right';
    //     content.style.fontSize = '2em';
    //     content.style.filter = 'invert(0.30)';
    //     content.style.marginTop = '-50%';
    // } else {
    //     content.style.display = 'none';
    // }
      
      document.getElementById('fname').textContent = fstName;
      document.getElementById('lname').textContent = lstName;
      document.getElementById('role2').textContent = role;
      document.getElementById('city2').textContent = cityText;
      document.getElementById('country2').textContent = country1;

     
      closeNav();
  });

 
});

function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "210px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }