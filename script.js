const button = document.querySelector('.toggle-button');
const container = document.querySelector('.container');
const text = document.querySelector('.text');

let isActive = false;

button.addEventListener('click', () => {
    isActive = !isActive;

    if (isActive) {

        text.textContent = 'Active State';
        container.style.backgroundColor = 'lightcoral';
        button.textContent = 'Reset';
        button.classList.add('active');
    } else {
        text.textContent = 'Initial Text';
        container.style.backgroundColor = 'lightblue';
        button.textContent = 'Click Me';
        button.classList.remove('active');
    }
});
