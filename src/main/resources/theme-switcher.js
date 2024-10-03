document.addEventListener('DOMContentLoaded', function () {
    const themeSelect = document.getElementById('theme');
    const darkThemeLink = document.getElementById('dark-theme-link');

    const savedTheme = localStorage.getItem('theme') || 'default';
    document.body.classList.add(savedTheme);
    document.querySelector('main').classList.add(savedTheme);
    themeSelect.value = savedTheme;

    if (savedTheme === 'dark') {
        darkThemeLink.removeAttribute('disabled');
    } else {
        darkThemeLink.setAttribute('disabled', 'true');
    }

    themeSelect.addEventListener('change', function () {
        const selectedTheme = this.value;





        document.body.classList.add(selectedTheme);
        document.querySelector('main').classList.add(selectedTheme);


        if (selectedTheme === 'dark') {
            darkThemeLink.removeAttribute('disabled');
        } else {
            darkThemeLink.setAttribute('disabled', 'true');
        }


        localStorage.setItem('theme', selectedTheme);
    });
});
