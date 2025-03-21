const themeLink = document.getElementById('theme');
const styles = ['/css/estilos.css', '/css/estilos-urbano.css', '/css/estilos-futuro.css'];
let currentIndex = 0;

document.getElementById('estiloLineal').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % styles.length; // 
    themeLink.setAttribute('href', styles[currentIndex]);
});

document.getElementById('estiloAleatorio').addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * styles.length); 
  } while (randomIndex === currentIndex); // 
    currentIndex = randomIndex;
    themeLink.setAttribute('href', styles[currentIndex]);
});
