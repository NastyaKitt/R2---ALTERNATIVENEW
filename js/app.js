const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // 10% элемента виден
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // если нужно, чтобы класс добавлялся один раз
    }
  });
};

const observer = new IntersectionObserver(callback, observerOptions);

const elements = document.querySelectorAll(
  '.blackKnight, .fiveMan, .tableTwo, .tableTwo img, .tableTwo video, ' +
  '.threeText, .threeTextChine, .fourMan, .fourItem, .tableThree, .tableThree img, ' +
  '.fiveItem, .fiveItem img, .fiveTable, .fiveTable img, .tableSix, .tableSix img, ' +
  '.dragons, .sixBlockButton'
);

elements.forEach(el => {
  observer.observe(el);
});

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
