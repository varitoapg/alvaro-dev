const roles = ["Front End Developer", "Full Stack Developer", "Engineer"];
let currentIndex = 0;

export function updateRole() {
  currentIndex = (currentIndex + 1) % roles.length;
  const roleDisplay = document.getElementById("roleDisplay");
  if (roleDisplay !== null) {
    roleDisplay.textContent = roles[currentIndex];
  }
}
