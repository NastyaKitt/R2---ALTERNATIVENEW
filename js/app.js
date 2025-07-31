function checkVisibility() {
  const elements = document.querySelectorAll(
    '.blackKnight, .fiveMan, .tableTwo, .tableTwo img, .tableTwo video, ' +
    '.threeText, .threeTextChine,.fourMan,.fourItem, .tableThree, .tableThree img, .fiveItem, .fiveItem img, ' +
    '.fiveTable, .fiveTable img, .tableSix, .tableSix img, .dragons, .sixBlockButton'
  );
  const windowBottom = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= windowBottom - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// 
document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('scrollToTop2').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//

window.addEventListener('load', function() {
  const lazyImages = document.querySelectorAll('img.gifka');

  lazyImages.forEach(function(img) {
    img.src = img.getAttribute('data-src');
  });
});
