const oddsemester = document.getElementById('odd-semester');
const distance = 20;

function scrollLeft() {
  oddsemester.scrollBy({
    left: -distance,
    behavior: 'smooth'
  });
}

function scrollRight() {
  oddsemester.scrollBy({
    left: distance,
    behavior: 'smooth'
  });
}