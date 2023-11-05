document.getElementById("see-more").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from scrolling to the top

    var additionalContent = document.getElementById("additional-content");
    if (additionalContent.style.display === "none" || additionalContent.style.display === "") {
        additionalContent.style.display = "block";
        this.innerText = "See Less";
    } else {
        additionalContent.style.display = "none";
        this.innerText = "See More";
    }
});