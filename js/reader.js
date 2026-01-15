fetch("data/dandadan.json")
  .then(res => res.json())
  .then(data => {
document.getElementById("storyTitle").innerText = data.title;
