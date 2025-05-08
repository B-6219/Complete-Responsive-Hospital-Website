
const contactBtn = document.querySelector('.contactBtn');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close-btn');

contactBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



