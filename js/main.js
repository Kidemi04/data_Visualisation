// Minimal interactivity: toggles a dark theme
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('toggle');
  const info = document.getElementById('info');
  if(!btn) return;
  btn.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    info.textContent = isDark ? 'Dark theme active.' : 'Light theme active.';
  });
});
