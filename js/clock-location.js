// Clock

function updateClock() {
    const clockDiv = document.getElementById('clock');
    const locationDiv = document.getElementById('location');

    // Get current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Display current time
    clockDiv.textContent = `${hours}:${minutes}:${seconds}`;

    // Get current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            locationDiv.textContent = `Latitude: ${lat}, Longitude: ${lon}`;
        }, (error) => {
            locationDiv.textContent = `Geolocation error: ${error.message}`;
        });
    } else {
        locationDiv.textContent = 'Geolocation is not supported by this browser.';
    }
}

// Initial call to display the clock immediately on page load
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);