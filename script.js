document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
    // Atualiza aria-pressed para acessibilidade
    const isFlipped = card.classList.contains('is-flipped');
    card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('is-flipped');
      const isFlipped = card.classList.contains('is-flipped');
      card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
    }
  });
});

