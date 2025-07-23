window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.animationScroll');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const centroVentana = window.innerHeight / 2;
    const centroSeccion = rect.top + rect.height / 2;
    const distancia = Math.abs(centroSeccion - centroVentana);

    // Seleccionamos los elementos hijos dentro de esta sección
    const leftFlower = section.querySelector('#leftFlower');
    const rightFlower = section.querySelector('#rightFlower');
    const opacity = section.querySelector('.textopa');
    const modulaSection = section.querySelector('.modulaSection');
    const textAnimation = section.querySelector('.textAnimation');
    const centerTitle = section.querySelector('.centerTitle');
    const video = section.querySelector('.videoContent');
  

    if (distancia < 50) {
      if (leftFlower) leftFlower.classList.add('left');
      if (rightFlower) rightFlower.classList.add('rightFlower');
      if (opacity) opacity.classList.add('textOpacity');
      if (modulaSection) modulaSection.classList.add('animationMD');
      if(textAnimation) textAnimation.classList.add('textAmOp');
      if (centerTitle) centerTitle.classList.add('centerAnimtion');
      if (video) video.classList.add('videoAnimatio');
    } else {
      if (leftFlower) leftFlower.classList.remove('left');
      if (rightFlower) rightFlower.classList.remove('rightFlower');
      if (opacity) opacity.classList.remove('textOpacity');
    }
  });
});
