// **************** DECLARATION OF VARIALBES ****************

const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

// **************** DECLARATION OF VARIALBES ****************

const unorderedList = document.createElement("ul")

for (let i = 0; i < genres.length; i++){
    const listItem = document.createElement("li")
    listItem.innerText = genres[i]
    unorderedList.appendChild(listItem)
}

document.getElementsByTagName("body")[0].appendChild(unorderedList)