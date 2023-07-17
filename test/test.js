const outsider = document.getElementById('outsider');
const distance = 500;

function scrollLft() {
  outsider.scrollBy({
    left: -distance,
    behavior: 'smooth'
  });
}

function scrollRight() {
  outsider.scrollBy({
    left: distance,
    behavior: 'smooth'
  });
}