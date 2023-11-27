function Setting({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}


function updateButton({ buttonEl, isDark }) {
  const newText = isDark ? "Change to light theme" : "Change to dark theme";
  buttonEl.setAttribute("aria-label", newText);
  buttonEl.innerText = newText;
}

function updateTheme({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


const button = document.getElementById('data-theme-toggle');
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");


let currentThemeSetting = Setting({ localStorageTheme, systemSettingDark });


updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateTheme({ theme: currentThemeSetting });


button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateTheme({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 




