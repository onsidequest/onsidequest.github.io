(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}

    var giscus = document.querySelector('iframe.giscus-frame');
    if (giscus) {
      giscus.contentWindow.postMessage({ giscus: { setConfig: { theme: next } } }, 'https://giscus.app');
    }
  });
})();
