document.addEventListener("DOMContentLoaded", function(event) { 
  const scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
  localStorage.setItem('scrollpos', window.scrollY);
};

const fadingElement = document.querySelectorAll('.fade-in');
const fadeOption = {
  root: null,
  // rootMargin: " 0px 0px -500px 0px",
  threshold: 0.3
};

const fadeOnScroll = new IntersectionObserver(function(entries, apeparOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(`enter ${entry.target}`);
      entry.target.classList.add('appear');
      apeparOnScroll.unobserve(entry.target);
    }
  })
}, fadeOption);

fadingElement.forEach(fade => {
  fadeOnScroll.observe(fade);
});
