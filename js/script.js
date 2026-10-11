console.log("Welcome to CyberSaathi");
const tips = [
"Never share your OTP with anyone.",
"Always use strong passwords.",
"Enable Two-Factor Authentication.",
"Check HTTPS before entering personal details.",
"Do not click on unknown links.",
"Keep your software updated."
];


const tip = document.getElementById("security-tip");

if (tip) {
    const randomTip = Math.floor(Math.random() * tips.length);
    tip.innerHTML = tips[randomTip];
}



const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("cybersaathi-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateThemeButton() {
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    updateThemeButton();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("cybersaathi-theme", isDark ? "dark" : "light");
        updateThemeButton();
    });
}
