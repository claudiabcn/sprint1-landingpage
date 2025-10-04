  const hamburger = document.getElementById('hamburger');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburgerIcon = document.querySelector('#hamburger img');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    hamburgerIcon.src = "../images/icon-close.svg";
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    hamburgerIcon.src = "../images/icon-hamburger.svg";
  });

  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      hamburgerIcon.src = "../images/icon-hamburger.svg";
    });
  });

  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
   
      tabButtons.forEach(b => b.classList.remove('active-tab'));
      btn.classList.add('active-tab');

      tabContents.forEach((content, i) => {
        content.classList.toggle('hidden', i !== index);
        content.classList.toggle('block', i === index);
      });
    });
  });

const faqButtons = document.querySelectorAll('.faq-item button');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');
      const isActive = !content.classList.contains('hidden');

      // Tanca tots
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-item button').forEach(btn => {
        btn.classList.remove('text-[#fa5959]');
        btn.querySelector('svg').classList.remove('rotate-180', 'text-[#fa5959]');
      });

      // Obre si no estava obert
      if (!isActive) {
        content.classList.remove('hidden');
        button.classList.add('text-[#fa5959]');
        icon.classList.add('rotate-180', 'text-[#fa5959]');
      }
    });
  });