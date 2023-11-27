
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  buttonEl.innerText = newCta;
}


function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


const button = document.querySelector("[data-theme-toggle]");


button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 




