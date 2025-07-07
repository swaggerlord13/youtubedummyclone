const mediaQuery = window.matchMedia("(max-width: 990px)");
const sidebar = document.querySelector(".sidebarrelative");

const toggleSidebar = (event) => {
  if (!mediaQuery.matches) return;

  const isToggleClicked = event.target.closest(".toggle");
  sidebar.style.display = isToggleClicked ? "block" : "none";
};

const setupEventListeners = () => {
  window.addEventListener("click", toggleSidebar);
};

// Initialize
setupEventListeners();

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
