document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content-section, footer-section");
    const navItems = document.querySelectorAll(".nav-item");

    const observerOptions = {
        root: null,
        // Highlights the menu item when the section fills the upper portion of the screen
        rootMargin: "-30% 0px -50% 0px", 
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                navItems.forEach((item) => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${currentId}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
        if(section) observer.observe(section);
    });
});