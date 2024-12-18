const welcomeSection = document.getElementsByClassName("description")[0];
const projectsTiles = document.getElementsByClassName("project-tile");
const skillsFill = document.getElementsByClassName("fill");
const services = document.getElementsByClassName("service");
const profileImg = document.getElementsByClassName("profile-img")[0];
const hamburgerIcon = document.getElementsByClassName("icon")[0];

const options = {
  threshold: 0.5,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      if (entry.target.className.includes("description")) {
        entry.target.classList.add("fadeInTitle");
      } else if (entry.target.className.includes("project-tile")) {
        entry.target.classList.add("slideUpTiles");
      } else if (entry.target.className.includes("fill")) {
        entry.target.classList.add("skillFill");
      } else if (entry.target.className.includes("service")) {
        entry.target.classList.add("animate");
      } else if (entry.target.className.includes("profile-img")) {
        entry.target.classList.add("appear");
      }
    }
  });
}, options);

observer.observe(welcomeSection);
observer.observe(profileImg);

const tiles = Array.from(projectsTiles);
tiles.forEach((project) => {
  observer.observe(project);
});

const service = Array.from(services);
service.forEach((service) => {
  observer.observe(service);
});

const skills = Array.from(skillsFill);
skills.forEach((skill) => {
  observer.observe(skill);
});

function displayMobileMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function viewportChanged(x) {
  if (x.matches) {
    // If media query matches
    const myLinks = document.getElementById("myLinks");
    myLinks.style.display = "block";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 767px)");

// Call listener function at run time
viewportChanged(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  viewportChanged(x);
});
