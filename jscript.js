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

// Function to fetch a list of manga
async function fetchMangaList() {
  try {
    // Replace with the actual API endpoint URL
    const response = await fetch('api.mangahook-api.vercel.app');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    displayManga(data.mangaList); // Call function to display the data
  } catch (error) {
    console.error("Could not fetch manga list:", error);
  }
}

// Function to display the data on your web page
function displayManga(mangas) {
  const container = document.getElementById('manga-container');
  mangas.forEach(manga => {
    const mangaElement = document.createElement('div');
    mangaElement.innerHTML = `
      <h3>${manga.title}</h3>
      <p>Latest Chapter: ${manga.latestChapter}</p>
      <img src="${manga.coverImageUrl}" alt="${manga.title} cover" style="width: 100px;">
    `;
    container.appendChild(mangaElement);
  });
}

// Call the function when your page loads
fetchMangaList();

});

