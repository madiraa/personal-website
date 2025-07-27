// Glitch effect for .glitch elements
function glitchText() {
  document.querySelectorAll('.glitch').forEach(el => {
    const text = el.getAttribute('data-text');
    let glitch = '';
    for (let i = 0; i < text.length; i++) {
      if (Math.random() > 0.8) {
        glitch += String.fromCharCode(33 + Math.floor(Math.random() * 94));
      } else {
        glitch += text[i];
      }
    }
    el.textContent = glitch;
    setTimeout(() => { el.textContent = text; }, 120);
  });
}
setInterval(glitchText, 1800);

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Terminal cursor effect is handled by CSS blink animation
// Add more hacker/cyber effects here as you wish! 

// Matrix digital rain loader
let matrixLoaderActive = false;
let matrixCanvas, matrixCtx, matrixInterval;
function showMatrixLoader(duration = 1600) {
  if (matrixLoaderActive) return;
  matrixLoaderActive = true;
  matrixCanvas = document.createElement('canvas');
  matrixCanvas.id = 'matrix-loader';
  matrixCanvas.style.position = 'fixed';
  matrixCanvas.style.top = '0';
  matrixCanvas.style.left = '0';
  matrixCanvas.style.width = '100vw';
  matrixCanvas.style.height = '100vh';
  matrixCanvas.style.zIndex = '9999';
  matrixCanvas.style.pointerEvents = 'none';
  matrixCanvas.style.display = 'block';
  document.body.appendChild(matrixCanvas);
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
  matrixCtx = matrixCanvas.getContext('2d');
  const fontSize = 18;
  let columns = Math.floor(matrixCanvas.width / fontSize);
  let drops = Array(columns).fill(1);
  function drawMatrix() {
    matrixCtx.fillStyle = 'rgba(16,16,20,0.15)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    matrixCtx.font = fontSize + "px Fira Mono, Consolas, monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = Math.random() > 0.5 ? '0' : '1';
      matrixCtx.fillStyle = '#00ffe7';
      matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  matrixInterval = setInterval(drawMatrix, 50);
  setTimeout(() => {
    clearInterval(matrixInterval);
    if (matrixCanvas.parentNode) matrixCanvas.parentNode.removeChild(matrixCanvas);
    matrixLoaderActive = false;
  }, duration);
}
// Export for HTML use
window.showMatrixLoader = showMatrixLoader; 