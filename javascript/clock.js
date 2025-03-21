function clock() {
  var time = new Date();

  var hours = time.getHours().toString().padStart(2, "0");
  var minutes = time.getMinutes().toString().padStart(2, "0");

  var timeString = `${hours}:${minutes}`;
  document.getElementsByClassName("clock")[0].textContent = timeString;
}

setInterval(clock, 1000);
clock();
