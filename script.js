document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    let size = 24; // Initial font size in pixels
    noButton.addEventListener("click", function(){
        size += 5;

        yesButton.style.fontSize = size + "px";
        yesButton.style.padding = (size / 2) + "px " + (size * 1.5) + "px";
    })
});
