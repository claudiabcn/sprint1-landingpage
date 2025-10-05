const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.onclick = () => mobileMenu.classList.replace('hidden', 'flex');
closeMenu.onclick = () => mobileMenu.classList.replace('flex', 'hidden');
mobileMenu.querySelectorAll('a').forEach(a => a.onclick = () => mobileMenu.classList.replace('flex', 'hidden'));


document.querySelectorAll('.tab-btn').forEach((btn, i) => {
  btn.onclick = () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('text-[#242A45]', 'after:opacity-100'));
    btn.classList.add('text-[#242A45]', 'after:opacity-100');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.tab-content')[i].classList.remove('hidden');
  };
});


document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.onclick = () => {
    const content = btn.nextElementSibling;
    const isOpen = !content.classList.contains('hidden');
    document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
    if (!isOpen) content.classList.remove('hidden');
  };
});


const emailInput = document.getElementById('emailInput');
const errorIcon = document.getElementById('errorIcon');
const errorMessage = document.getElementById('errorMessage');

emailInput.oninput = () => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  errorIcon.classList.toggle('hidden', isValid || !emailInput.value);
  errorMessage.classList.toggle('hidden', isValid || !emailInput.value);
  emailInput.classList.toggle('ring-2', !isValid && emailInput.value);
  emailInput.classList.toggle('ring-red-500', !isValid && emailInput.value);
};

emailInput.closest('form').onsubmit = e => e.preventDefault();