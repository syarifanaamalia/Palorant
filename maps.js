document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const toggleClose = document.querySelector('.menu-toggle-close');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        toggleClose.classList.toggle('active');
        menuToggle.classList.toggle('hidden');
    });

    toggleClose.addEventListener('click', () => {
        navbar.classList.remove('active');
        toggleClose.classList.remove('active');
        menuToggle.classList.remove('hidden');
    });

    const items = document.querySelectorAll(".slider .list .item");
    const thumbnails = document.querySelectorAll(".thumbnail .item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateActiveSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });

        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle("active", i === index);
        });

        const thumbnailContainer = document.querySelector(".thumbnail");
        const activeThumbnail = thumbnails[index];

        if (thumbnailContainer && activeThumbnail) {
            const containerRect = thumbnailContainer.getBoundingClientRect();
            const thumbnailRect = activeThumbnail.getBoundingClientRect();

            const offset = thumbnailRect.left - containerRect.left - (containerRect.width / 2) + (thumbnailRect.width / 2);

            thumbnailContainer.scrollBy({
                left: offset,
                behavior: "smooth"
            });
        }
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            updateActiveSlide(currentIndex);
        });
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateActiveSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateActiveSlide(currentIndex);
    });

    updateActiveSlide(currentIndex);
});
