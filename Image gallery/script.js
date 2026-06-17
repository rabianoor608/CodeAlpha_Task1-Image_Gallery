let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
    document.getElementById("lightbox").style.display = "flex";
    currentIndex = index;
    showImage();
}

// Show Image
function showImage() {
    let lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex].src;
}


// Next / Prev
function changeImage(step) {
    currentIndex += step;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Filter Images
function filterImages(category) {
    images.forEach((img) => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });

    // Active button
    let buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}