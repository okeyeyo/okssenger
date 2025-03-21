if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    const batterySpan = document.getElementById("battery");
    batterySpan.textContent = `${battery.level * 100}%`;
  });
} else {
  console.log("Battery API is not supported on this browser.");
}
