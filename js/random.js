const stylesheets = ['css1.css', 'css2.css', 'css3.css'];
let currentStyleIndex = 0;
const styleLink = document.getElementById('style-link');
const rememberButton = document.getElementById('remember-btn');
const selectElement = document.getElementById('style-select');
const radios = document.querySelectorAll('input[name="style-radio"]');
const storedStyle = localStorage.getItem('selectedStyle');

if (storedStyle) {
    applyStyle(storedStyle);
    selectElement.value = storedStyle;
    radios.forEach(radio => { if (radio.value === storedStyle) radio.checked = true; });
    rememberButton.classList.add('active');
}

document.getElementById('cycle-btn').addEventListener('click', () => {
    currentStyleIndex = (currentStyleIndex + 1) % stylesheets.length;
    applyStyle(stylesheets[currentStyleIndex]);
});

document.getElementById('random-btn').addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * (stylesheets.length + 1));
    applyStyle(randomIndex < stylesheets.length ? stylesheets[randomIndex] : '');
});

rememberButton.addEventListener('click', () => {
    if (rememberButton.classList.contains('active')) {
        localStorage.removeItem('selectedStyle');
        rememberButton.classList.remove('active');
    } else {
        localStorage.setItem('selectedStyle', styleLink.getAttribute('href'));
        rememberButton.classList.add('active');
    }
});

selectElement.addEventListener('change', (event) => {
    applyStyle(event.target.value);
    if (rememberButton.classList.contains('active')) {
        localStorage.setItem('selectedStyle', event.target.value);
    }
});

radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        applyStyle(event.target.value);
        if (rememberButton.classList.contains('active')) {
            localStorage.setItem('selectedStyle', event.target.value);
        }
    });
});

function applyStyle(style) {
    styleLink.setAttribute('href', style);
    selectElement.value = style;
    radios.forEach(radio => { if (radio.value === style) radio.checked = true; });
}