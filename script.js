document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".contain"); // Main header element
    const fContain = document.querySelector(".f-contain"); // Target element for animation

    if (!header || !fContain) return; // Prevents errors if elements are not found

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("top-nav-active");
        } else {
            header.classList.remove("top-nav-active");
        }

        // Check if scroll passed viewport height
        if (window.scrollY > 300) {
            fContain.classList.add("top-nav-active"); // Apply animation to .f-contain
        } else {
            fContain.classList.remove("top-nav-active");
        }
    });
});

