document.addEventListener('DOMContentLoaded', function() {

  let backImage = document.getElementById('backImage');
  backImage.style.display = 'none';

  let icons = document.getElementById('icons');
  icons.style.display = 'none';

  document.getElementById('submitBtn').addEventListener('click', function(e) {
      e.preventDefault();
      let bgPic = document.getElementById('bgImage').value;
      let picture = document.getElementById('profilePic').files[0];
      let bgTag = document.getElementById('bgImageTag').value;
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

      // Background image
      if (bgPic === 'Yes') {
        let randomImage = `https://source.unsplash.com/random/?${bgTag}`;
          backImage.src = randomImage;
          backImage.style.display = 'flex';
      } else {
          backImage.style.display = 'none';
      }


      // Profile image
      if (picture) {
          let reader = new FileReader();
          reader.onload = function(event) {
              document.getElementById('profilePic2').src = event.target.result;
          };
          reader.readAsDataURL(picture);
      }

      // SM Position
      if (leftRight.value === 'Left') {
          icons.style.float = 'left';
          icons.style.display = 'flex';
          icons.style.backgroundColor = 'rgb(158, 185, 185)';
          icons.style.fontSize = '2em';
          icons.style.marginLeft = '21%';
          icons.style.width = '2%';
          icons.style.height = '23vh';
      } else {
          icons.style.float = 'right';
          icons.style.display = 'flex';
          icons.style.backgroundColor = 'rgb(158, 185, 185)';
          icons.style.fontSize = '2em';
          icons.style.marginRight = '24%';
          icons.style.width = '2%';
          icons.style.height = '23vh';
      }

      document.getElementById('fname').textContent = fstName;
      document.getElementById('lname').textContent = lstName;
      document.getElementById('role2').textContent = role;
      document.getElementById('city2').textContent = cityText;
      document.getElementById('country2').textContent = country1;
      document.getElementById('twitter1').href = `https://twitter.com/${result}`;
      document.getElementById('github1').href = `https://github.com/${result2}`;
      document.getElementById('linkedin1').href = `https://linkedin.com/in/${result3}`;
      document.getElementById('instagram1').href = `https://instagram.com/${result4}`;

      closeNav();

      
  });
});

// Hidden Menu
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "210px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}