if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    const batterySpan = document.getElementsByClassName("battery")[0];
    batterySpan.textContent = `${battery.level * 100}%`;
  });
} else {
  console.log("Battery API 지원하지 않음.");
}
