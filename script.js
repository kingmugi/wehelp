document.addEventListener('DOMContentLoaded', function () {
  const dec1 = document.querySelector('.dec_1');
  const dec2 = document.querySelector('.dec_2');

  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;
    dec1.style.transform = 'translateY(' + scrollDistance * 0.5 + 'px)';
    dec2.style.transform = 'translateY(' + scrollDistance * 0.3 + 'px)';
  });
});