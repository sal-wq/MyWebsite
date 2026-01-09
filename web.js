const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".page");

function setActive(id){
  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("href") === "#" + id);
  });
}

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom){
      setActive(section.id);
    }
  });
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    setActive(btn.getAttribute("href").replace("#",""));
  });
});

// Kleng nis scroll animation
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => revealObserver.observe(el));
