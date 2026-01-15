// Lấy tên truyện từ URL
const params = new URLSearchParams(window.location.search);
const story = params.get("story") || "dandadan";

// Load file JSON tương ứng
fetch(`data/${story}.json`)
  .then(res => {
    if (!res.ok) throw new Error("Không tìm thấy truyện");
    return res.json();
  })
  .then(data => {
    document.getElementById("storyTitle").innerText = data.title;

    const select = document.getElementById("chapterSelect");
    const pages = document.getElementById("pages");

    data.chapters.forEach((chap, index) => {
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = chap.name;
      select.appendChild(opt);
    });

    function loadChapter(i) {
      pages.innerHTML = "";
      data.chapters[i].images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        img.style.width = "100%";
        pages.appendChild(img);
      });
    }

    select.onchange = () => loadChapter(select.value);
    loadChapter(0);
  })
  .catch(err => {
    document.getElementById("pages").innerText =
      "❌ Không load được truyện";
    console.error(err);
  });
