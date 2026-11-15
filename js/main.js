// Menú móvil
(function () {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('menu-principal');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const abierto = nav.classList.toggle('abierto');
    btn.setAttribute('aria-expanded', String(abierto));
  });
})();

// Galería: orden aleatorio y filtro por categoría
(function () {
  const galeria = document.getElementById('galeria');
  if (!galeria) return;
  const items = Array.from(galeria.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  items.forEach(el => galeria.appendChild(el));

  const botones = document.querySelectorAll('.filtros button');
  botones.forEach(b => b.addEventListener('click', () => {
    const cat = b.dataset.cat;
    botones.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    items.forEach(fig => { fig.hidden = !(cat === 'todas' || fig.dataset.cat === cat); });
  }));
})();

// Noticias: "Llegir més" / "Menys" despliega y cierra el texto completo de la tarjeta
document.querySelectorAll('.enlace-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cuerpo = btn.closest('.cuerpo');
    const panel = cuerpo && cuerpo.querySelector('.mas');
    if (!panel) return;
    const abierto = panel.hidden;               // si estaba cerrado, ahora se abre
    panel.hidden = !abierto;
    btn.setAttribute('aria-expanded', String(abierto));
    btn.textContent = abierto ? btn.dataset.menos : btn.dataset.mas;
  });
});