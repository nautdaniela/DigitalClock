const clock = document.querySelector('#clock');

function updateClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
