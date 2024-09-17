// Clock

function updateClock() {
  const clockDiv = document.getElementById("clock");

  // Get current time
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Display current time
  clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call to display the clock immediately on page load
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
