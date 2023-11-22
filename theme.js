function themeSwitcher() {

    const toggle = document.getElementById('modeToggle');

    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }

}
