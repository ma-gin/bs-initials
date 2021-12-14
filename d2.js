const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

const unorderedList = document.createElement("ul")

for (let i = 0; i < genres.length; i++){
    const listItem = document.createElement("li")
    listItem.innerText = genres[i]
    unorderedList.appendChild(listItem)
}

document.getElementsByTagName("body")[0].appendChild(unorderedList)

const img = document.querySelector(".img");

img.addEventListener("click", toggleVisibility);

function toggleVisibility(e) {
  const ex9 = document.getElementById("exercise-9")
  ex9.classList.toggle("hide")
}