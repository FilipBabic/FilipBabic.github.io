//Calculate age function
function calculateAge() {
  const dob = document.getElementById("dob").value;
  const birthHour = parseInt(document.getElementById("birth-hour").value);
  const birthMinute = parseInt(document.getElementById("birth-minute").value);

  if (dob && !isNaN(birthHour) && !isNaN(birthMinute) && !(birthHour > 24) && !(birthMinute > 60)) {
    const dobDate = new Date(dob);
    dobDate.setHours(birthHour, birthMinute, 0, 0); // Set hour and minute of birth

    const today = new Date();

    // Check if the date of birth is in the future
    if (dobDate > today) {
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerText = "The date of birth cannot be in the future.";
      return;
    }

    // Calculate years
    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth();
    let ageDays = today.getDate() - dobDate.getDate();
    let ageHours = today.getHours() - dobDate.getHours();
    let ageMinutes = today.getMinutes() - dobDate.getMinutes();
    let ageSeconds = today.getSeconds() - dobDate.getSeconds();

    // Adjust months and years
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    // Adjust days and months
    if (ageDays < 0) {
      ageMonths--;
      let lastMonth = (today.getMonth() - 1 + 12) % 12;
      let daysInLastMonth = new Date(today.getFullYear(), lastMonth + 1, 0).getDate();
      ageDays += daysInLastMonth;
    }

    // Adjust hours and days
    if (ageHours < 0) {
      ageDays--;
      ageHours += 24;
    }

    // Adjust minutes and hours
    if (ageMinutes < 0) {
      ageHours--;
      ageMinutes += 60;
    }

    // Adjust seconds and minutes
    if (ageSeconds < 0) {
      ageMinutes--;
      ageSeconds += 60;
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `<h4>Your age is:</h4> 
      ${ageYears} years, ${ageMonths} months, ${ageDays} days, ${ageHours} hours, ${ageMinutes} minutes and ${ageSeconds} seconds old.`;
  } else {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerText =
      "Please enter a valid date of birth, hour, and minute.";
  }
}
