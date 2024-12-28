

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")



hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
 
 
 
 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	 hamburger.classList.remove("active");
	 navMenu.classList.remove("active");
 }));




ScrollReveal({distance: '80px',
    duration: 2000,
    delay:200,
 });


 ScrollReveal().reveal('.home-content, heading, ', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .pengalaman-container, .kontak form ', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .pendidikan-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .pendidikan-content', { origin: 'right' });


 const typed = new Typed('.multiple-text',{
    strings: ['Freshgraduate Sistem Informasi', 'Frontend Developer'],
    typeSpeed : 50,
    backSpeed: 50,
    backDelay : 1000,
    loop: true,
 });