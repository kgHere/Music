function searchMusic() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const musicCards = document.querySelectorAll(".music-card");

    musicCards.forEach(card => {
        const musicName = card.dataset.name.toLowerCase();
        if (musicName.includes(searchQuery)) {
            card.classList.add("highlight");
        } else {
            card.classList.remove("highlight");
        }
    });
}

// Add event listener for Enter key
document.getElementById("search-box").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchMusic();
    }
});
