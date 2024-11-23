
// JavaScript for basic interactivity
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Gaming Community & IT Consulting!");
    
    // Scroll to section functionality
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
