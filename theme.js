
function updateButtonText({ button, isDark }) {
  const newText = isDark ? "Change to light theme" : "Change to dark theme";
  button.innerText = newCta;
}

function updateThemeOnHtml({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


const button = document.querySelector("[data-theme-toggle]");


updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });


button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButtonText({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtml({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 






