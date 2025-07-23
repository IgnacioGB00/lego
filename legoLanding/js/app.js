const btnModular = document.querySelector('#modularBtn');
const btnparts = document.querySelector('#partsBtn');

const mobil = document.getElementById('sourceMobile');
const desktop = document.getElementById('sourceDesktop');
const img = document.getElementById('modularImg');

function changeImage(newSrc, newSrcMobile, newSrcDesktop) {
  // Empieza con fade-out
  img.classList.remove('fade-in');
  img.classList.add('fade-out');

  setTimeout(() => {
    // Cambia las imágenes cuando ya está desvanecido
    img.src = newSrc;
    mobil.srcset = newSrcMobile;
    desktop.srcset = newSrcDesktop;

    // Espera un instante y hace fade-in
    requestAnimationFrame(() => {
      img.classList.remove('fade-out');
      img.classList.add('fade-in');
    });
  }, 500); // Debe coincidir con la duración del fade-out
}

btnparts.addEventListener('click', () => {
  changeImage('img/parts.png', 'img/partsCell.png', 'img/parts.png');
  btnparts.style.backgroundColor = '#F9DC24';
  btnModular.style.backgroundColor = '#2C2C2C';
});

btnModular.addEventListener('click', () => {
  changeImage('img/modular.png', 'img/modularCell.png', 'img/modular.png');
  btnparts.style.backgroundColor = '#2C2C2C';
  btnModular.style.backgroundColor = '#F9DC24';
});


