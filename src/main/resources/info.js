
const infoParagraph = document.getElementById('about-info');
const toggleBtn = document.getElementById('toggle-info-btn');

toggleBtn.addEventListener('click', function () {

    if (infoParagraph.style.display === 'none') {
        infoParagraph.style.display = 'block';
        toggleBtn.textContent = 'Скрыть информацию';
    } else {
        infoParagraph.style.display = 'none';
        toggleBtn.textContent = 'Узнать подробнее';
    }
});
