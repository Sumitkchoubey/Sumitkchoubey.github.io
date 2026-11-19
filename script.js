(function () {
  var modal = document.getElementById('modal');
  var frame = document.getElementById('modal-video');
  var title = document.getElementById('modal-title');
  var desc = document.getElementById('modal-desc');

  function open(i) {
    var d = window.DEMOS[i];
    title.textContent = d.title;
    desc.textContent = d.description;
    frame.src = d.video;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.hidden = true;
    frame.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-demo]').forEach(function (btn) {
    btn.addEventListener('click', function () { open(Number(btn.dataset.demo)); });
  });
  document.getElementById('modal-close').addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) close(); });
})();
