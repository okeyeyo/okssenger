const toggleSwitch = document.getElementById("darkToggle");

toggleSwitch.addEventListener("click", () => {
  // body에 다크모드 토글 클래스 적용
  document.body.classList.toggle("dark");

  // 토글 스위치에 다크모드 클래스 적용하여 배경색 변경 및 thumb 이동
  toggleSwitch.classList.toggle("dark");

  // 상태에 따라 thumb 내부 이모지 변경
  if (toggleSwitch.classList.contains("dark")) {
    toggleSwitch.querySelector(".status-bar__toggle-thumb").textContent = "🌚";
  } else {
    toggleSwitch.querySelector(".status-bar__toggle-thumb").textContent = "🌝";
  }
});
