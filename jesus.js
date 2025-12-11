<script>
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
</script>


// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Animate on scroll
const animatedItems = document.querySelectorAll('.animate-slide');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach((item) => observer.observe(item));
// ===== PROJECT MODAL SCRIPT =====
const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.project-modal');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const projectCard = e.target.closest('.project-card');
    const modalId = projectCard.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.project-modal').classList.remove('active');
  });
});

// Close modal when clicking outside the content
modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});
const fadeEls = document.querySelectorAll('.animate-fade');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => fadeObserver.observe(el));
// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();
