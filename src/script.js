const switchButton = document.querySelector('.switch');

switchButton.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});