const btnModular = document.querySelector('#modularBtn');
const btnParts = document.querySelector('#partsBtn');

const mobileSource = document.getElementById('sourceMobile');
const desktopSource = document.getElementById('sourceDesktop');
const img = document.getElementById('modularImg');

// Animar con transform y opacity usando JS
function animateImageChange(newSrc, newSrcMobile, newSrcDesktop) {
  // Paso 1: animar salida (scale y slide left)
  img.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  img.style.transform = 'scale(0.8) translateX(-100%)';
  img.style.opacity = '0';

  // Esperar la animación de salida (~600ms)
  setTimeout(() => {
    // Paso 2: cambiar la imagen
    mobileSource.srcset = newSrcMobile;
    desktopSource.srcset = newSrcDesktop;
    img.src = '';
    img.src = newSrc;

    // Forzar reflujo (para asegurar que el cambio se tome en cuenta)
    void img.offsetWidth;

    // Paso 3: reiniciar estilo sin transición
    img.style.transition = 'none';
    img.style.transform = 'scale(1.2) translateX(100%)';
    img.style.opacity = '0';

    // Paso 4: reactivar animación de entrada
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        img.style.transform = 'scale(1) translateX(0)';
        img.style.opacity = '1';
      });
    });
  }, 600);
}

btnParts.addEventListener('click', () => {
  animateImageChange('img/parts.webp', 'img/partsCell.webp', 'img/parts.webp');
  btnParts.style.backgroundColor = '#F9DC24';
  btnModular.style.backgroundColor = '#2C2C2C';
});

btnModular.addEventListener('click', () => {
  animateImageChange('img/modular.webp', 'img/modularCell.webp', 'img/modular.webp');
  btnParts.style.backgroundColor = '#2C2C2C';
  btnModular.style.backgroundColor = '#F9DC24';
});


let downloadBtn = document.querySelector('#downloadBtn');
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'LEGO_Templo_Japones_Manual.pdf';
  link.download = 'LEGO_Templo_Japones_Manual.pdf';
  link.click();
});

