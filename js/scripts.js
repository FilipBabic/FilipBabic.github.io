console.log("Welcome to my portfolio website!");

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

//Calculate age function
function calculateAge() {
    const dob = document.getElementById('dob').value;
    const birthHour = parseInt(document.getElementById('birth-hour').value);
    const birthMinute = parseInt(document.getElementById('birth-minute').value);
    
    if (dob && !isNaN(birthHour) && !isNaN(birthMinute) && !(birthHour>24) && !(birthMinute>60)) {
        const dobDate = new Date(dob);
        dobDate.setHours(birthHour, birthMinute, 0, 0);  // Set hour and minute of birth

        const today = new Date();
        
        // Check if the date of birth is in the future
        if (dobDate > today) {
            document.getElementById('result').style.display = 'block';
            document.getElementById('result').innerText = 'The date of birth cannot be in the future.';
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
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerText = `Your age is: 
            ${ageYears} years, 
            ${ageMonths} months, 
            ${ageDays} days, 
            ${ageHours} hours, 
            ${ageMinutes} minutes, 
            and ${ageSeconds} seconds old.`;
    } else {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerText = 'Please enter a valid date of birth, hour, and minute.';
    }
}

function showUnderstanding(id) {
    var understandingContent = document.getElementById(id).innerHTML;
    var fullScreenDiv = document.getElementById('fullScreenUnderstanding');
    var contentDiv = document.getElementById('understandingContent');

    contentDiv.innerHTML = understandingContent;
    fullScreenDiv.style.display = 'block';
}

function closeFullScreen() {
    var fullScreenDiv = document.getElementById('fullScreenUnderstanding');
    fullScreenDiv.style.display = 'none';
}

function toggleContent() {
    var content = document.getElementById("the-story");
    if (content.style.display === "" || content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional, smooth scrolling animation
    });
}

// Show/hide scroll to top button based on scroll position
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-to-top').style.display = 'block';
    } else {
        document.querySelector('.scroll-to-top').style.display = 'none';
    }
}