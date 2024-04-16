//function to open nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("header").style.display = "none"; // hide the header when menu opens
}
//function to close nav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.display = "block"; // show the header when menu closes
}
//function to change image in the carousel
function changeImage(imagePath) {
    document.getElementById('mainImg').src = imagePath;
}
//open the login panel
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginPanel').style.display = 'block';
});
//close the login panel
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('loginPanel').style.display = 'none';
});
//submit login form
document.getElementById('loginBtnForm').addEventListener('click', function() {
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
});
//logout button
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginPanel').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
});
//code for image gallery hover
const cimages = document.getElementsByClassName("cimage");
for (let i = 0; i < cimages.length; i++) {
    cimages[i].addEventListener("mouseover", function() {
        this.style.border = "solid blue 2px";
    });
    cimages[i].addEventListener("mouseout", function() {
        this.style.border = "none";
    });
}
//submit event suggestion code
function submitEvent() {
  var title = document.forms["events"]["event_title"].value;
  var date = document.forms["events"]["event_date"].value;
  if (title =="") {
    alert("An event must have a title!");
  }
  else {
    if (date.length == 0) {
      alert("An event must have a date!");
    }
    else {
      alert("Event submitted! The society will contact yousoon!");
    }
  }
}