document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById('submitBtn').addEventListener('click', function(e) {
      e.preventDefault()
      let bgPic = document.getElementById('bgImage').value;
      let picture = document.getElementById('profilePic').files[0];
      let fstName = document.getElementById('firstName').value;
      let lstName = document.getElementById('lastName').value;
      let role = document.getElementById('role1').value;
      let cityText = document.getElementById('city').value;
      let country1 = document.getElementById('country').value;
      let leftRight = document.getElementById('smPosition');
      let result = document.getElementById('twitter').value;
      let result2 = document.getElementById('github').value;
      let result3 = document.getElementById('linkedIn').value;
      let result4 = document.getElementById('instagram').value;

      
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

    

    if (leftRight.value === 'Left') {
      icons.style.float = 'left';
      icons.style.display = 'flex';
      icons.style.backgroundColor = 'rgb(158, 185, 185)';
      icons.style.fontSize = '2em';
      icons.style.marginLeft = '23%';
      icons.style.width = '2.5%';
      icons.style.height = '23vh';
      
      
  } else {
    icons.style.float = 'right';
      icons.style.display = 'flex';
      icons.style.backgroundColor = 'rgb(158, 185, 185)';
      icons.style.fontSize = '2em';
      icons.style.marginRight = '24%';
      icons.style.width = '2.5%';
      icons.style.height = '23vh';
  }
      
      document.getElementById('fname').textContent = fstName;
      document.getElementById('lname').textContent = lstName;
      document.getElementById('role2').textContent = role;
      document.getElementById('city2').textContent = cityText;
      document.getElementById('country2').textContent = country1;
      document.getElementById('twitter1').href = result;
      document.getElementById('github1').href = result;
      document.getElementById('linkedin1').href = result;
      document.getElementById('instagram1').href = result;
      
     
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