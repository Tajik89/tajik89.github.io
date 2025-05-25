const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const navItems = document.querySelectorAll('.nav-item');

    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      nav.classList.remove('active');
      overlay.classList.remove('active');
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
      });
    });

window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;

    document.querySelector('.layer1').style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
    document.querySelector('.layer2').style.transform = "translateY(" + scrollPosition * 0.3 + "px)";
    document.querySelector('.layer3').style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  });