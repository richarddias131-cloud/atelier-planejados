// Número do WhatsApp com DDI + DDD, só dígitos (ex.: 5511987654321)
const WHATSAPP = '5500000000000';

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  })
);

// Filtro do portfólio
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.gallery__item');

filters.forEach((btn) =>
  btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.dataset.filter;
    items.forEach((item) => {
      item.classList.toggle('is-hidden', cat !== 'todos' && item.dataset.cat !== cat);
    });
  })
);

// Animação ao rolar
const revealTargets = document.querySelectorAll('.section__head, .card, .split__media, .split__text, .gallery, .steps li, .form');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Formulário -> WhatsApp
const form = document.getElementById('form-orcamento');
const msg = form.querySelector('.form__msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome').trim();
  const telefone = data.get('telefone').trim();

  form.nome.classList.toggle('is-invalid', !nome);
  form.telefone.classList.toggle('is-invalid', !telefone);
  if (!nome || !telefone) {
    msg.textContent = 'Preencha nome e telefone para continuar.';
    return;
  }
  msg.textContent = '';

  const texto = [
    'Olá! Gostaria de um orçamento.',
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Ambiente: ${data.get('ambiente')}`,
    data.get('mensagem').trim() && `Mensagem: ${data.get('mensagem').trim()}`,
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});
