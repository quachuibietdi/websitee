// Add this script to your HTML file or include it in your JavaScript file

// Select the hyperlink or image element
document.getElementById('myLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default hyperlink behavior
    window.location.href = 'https://example.com'; // Redirect to the desired URL
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Ghi nhớ trạng thái
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Tự động bật lại dark mode khi load trang
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
// Bật / tắt dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// TỰ ĐỘNG ÁP DỤNG KHI LOAD MỌI FILE HTML
window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
});


});
