if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    const batterySpan = document.getElementsByClassName(
      "status-bar__battery"
    )[0];
    batterySpan.textContent = `${Math.floor(battery.level * 100)}%`;
  });
} else {
  console.log("Battery API 지원하지 않음.");
}
