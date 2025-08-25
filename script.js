document.addEventListener("DOMContentLoaded", () => {
    const projectCircle = document.querySelector(".project-circle");
    const socialIcons = document.querySelector(".social-icons");
    const projectsSection = document.querySelector(".projects-section");

    projectsSection.addEventListener("mouseenter", () => {
        projectCircle.style.transform = "scale(0.1)";
        projectCircle.style.opacity = "0";
        socialIcons.style.transform = "translate(-50%, -50%) scale(1)";
        socialIcons.style.opacity = "1";
    });

    projectsSection.addEventListener("mouseleave", () => {
        projectCircle.style.transform = "scale(1)";
        projectCircle.style.opacity = "1";
        socialIcons.style.transform = "translate(-50%, -50%) scale(0)";
        socialIcons.style.opacity = "0";
    });
});