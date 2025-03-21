const themeLink = document.getElementById('theme');
const styles = ['/css/estilos.css', '/css/estilos-urbano.css', '/css/estilos-futuro.css'];
let currentIndex = 0;

// Cambiar estilos de forma lineal
document.getElementById('toggleLinear').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % styles.length; 
    themeLink.setAttribute('href', styles[currentIndex]);
});

// Cambiar estilos de forma aleatoria
document.getElementById('toggleRandom').addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * styles.length); 
    } while (randomIndex === currentIndex); 
    currentIndex = randomIndex;
    themeLink.setAttribute('href', styles[currentIndex]);
});

window.onload = function() {
    const primerInput = document.querySelector('input');
    if (primerInput) {
        primerInput.focus();
    }
};

